import { SortOption } from './const';
import SortItem from './sort-item';

type SortListProps = {
  isVisible: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

function SortList(props: SortListProps): JSX.Element {
  const { isVisible, setIsOpen } = props;

  return (
    <ul
      className={`places__options places__options--custom ${
        isVisible ? 'places__options--opened' : ''
      }`}
    >
      {SortOption.map((sortOption) => (
        <SortItem
          key={sortOption}
          itemSortOption={sortOption}
          setIsOpen={setIsOpen}
        />
      ))}
    </ul>
  );
}

export default SortList;
