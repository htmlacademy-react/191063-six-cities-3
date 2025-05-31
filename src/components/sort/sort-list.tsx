import { SortOption } from '../../const';
import { SortType } from '../../types/sort';
import SortItem from './sort-item';

type SortListProps = {
  isVisible: boolean;
  currentSortOption: SortType;
  handleSetSortOption: (sortOption: SortType) => void;
  setIsOpen: (isOpen: boolean) => void;
};

function SortList(props: SortListProps): JSX.Element {
  const { isVisible, currentSortOption, handleSetSortOption, setIsOpen } =
    props;

  return (
    <ul
      className={`places__options places__options--custom ${
        isVisible ? 'places__options--opened' : ''
      }`}
    >
      {Object.values(SortOption).map((sortOption) => (
        <SortItem
          key={sortOption.title}
          itemSortOption={sortOption}
          currentSortOption={currentSortOption}
          handleSetSortOption={handleSetSortOption}
          setIsOpen={setIsOpen}
        />
      ))}
    </ul>
  );
}

export default SortList;
