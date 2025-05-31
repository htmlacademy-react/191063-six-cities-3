import { SortType } from '../../types/sort';

type SortItemProps = {
  itemSortOption: SortType;
  currentSortOption: SortType;
  handleSetSortOption: (sortOption: SortType) => void;
  setIsOpen: (isOpen: boolean) => void;
};

function SortItem(props: SortItemProps): JSX.Element {
  const { itemSortOption, currentSortOption, handleSetSortOption, setIsOpen } = props;

  const className =
    itemSortOption === currentSortOption
      ? 'places__option places__option--active'
      : 'places__option';

  const handleItemClick = (): void => {
    handleSetSortOption(itemSortOption);
    setIsOpen(false);
  };

  return (
    <li className={className} tabIndex={0} onClick={handleItemClick}>
      {itemSortOption.title}
    </li>
  );
}

export default SortItem;
