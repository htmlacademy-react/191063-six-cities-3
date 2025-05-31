import { useEffect, useRef, useState, memo } from 'react';
import { offersSelectors } from '../../store/slices/offers-slice/offers-slice';
import { SortOptionLabel } from './sort-const';
import { isEscapeKey } from '../../utils/common-utils';
import useAppSelector from '../../hooks/use-app-selector';
import SortList from './sort-list';

function SortComponent(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const currentSortOption = useAppSelector(offersSelectors.selectSortOption);
  const dropdownRef = useRef<HTMLFormElement>(null);

  const handleFormClick = (): void => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleEscKeydown = (evt: KeyboardEvent) => {
      if (isEscapeKey(evt)) {
        evt.preventDefault();
        setIsOpen(false);
      }
    };

    const handleDocumentClick = (evt: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(evt.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscKeydown);
      document.addEventListener('click', handleDocumentClick);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKeydown);
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [isOpen, setIsOpen]);

  return (
    <form
      className="places__sorting"
      action="#"
      method="get"
      onClick={handleFormClick}
      ref={dropdownRef}
      data-testid="sort-form-test-id"
    >
      <span className="places__sorting-caption">Sort by </span>
      <span
        className="places__sorting-type"
        data-testid="current-sort-option-test-id"
        tabIndex={0}
      >
        {SortOptionLabel[currentSortOption]}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <SortList isVisible={isOpen} setIsOpen={setIsOpen} />
    </form>
  );
}

const Sort = memo(SortComponent);

export default Sort;
