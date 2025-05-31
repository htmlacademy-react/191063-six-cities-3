import { useEffect, useRef, useState } from 'react';
import { isEscapeKey } from '../../utils/common-utils';
import { SortOptionLabel } from './const';
import { selectSortOption } from '../../store/selectors';
import SortList from './sort-list';
import useAppSelector from '../../hooks/use-app-selector';

function Sort(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const currentSortOption = useAppSelector(selectSortOption);
  const dropdownRef = useRef<HTMLFormElement>(null);

  const handleFormToggle = (): void => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const onEscKeydown = (evt: KeyboardEvent) => {
      if (isEscapeKey(evt)) {
        evt.preventDefault();
        setIsOpen(false);
      }
    };

    const handleClickOutside = (evt: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(evt.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', onEscKeydown);
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('keydown', onEscKeydown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  return (
    <form
      className="places__sorting"
      action="#"
      method="get"
      onClick={handleFormToggle}
      ref={dropdownRef}
    >
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0}>
        {SortOptionLabel[currentSortOption]}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <SortList
        isVisible={isOpen}
        setIsOpen={setIsOpen}
      />
    </form>
  );
}

export default Sort;
