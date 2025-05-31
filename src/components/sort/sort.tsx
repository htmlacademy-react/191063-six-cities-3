import { useEffect, useRef, useState } from 'react';
import { SortType } from '../../types/sort';
import SortList from './sort-list';
import { isEscapeKey } from '../../utils/common-utils';

type SortProps = {
  currentSortOption: SortType;
  handleSetSortOption: (sortOption: SortType) => void;
};

function Sort(props: SortProps): JSX.Element {
  const { currentSortOption, handleSetSortOption } = props;
  const [isOpen, setIsOpen] = useState(false);
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
        {currentSortOption.title}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <SortList
        isVisible={isOpen}
        currentSortOption={currentSortOption}
        handleSetSortOption={handleSetSortOption}
        setIsOpen={setIsOpen}
      />
    </form>
  );
}

export default Sort;
