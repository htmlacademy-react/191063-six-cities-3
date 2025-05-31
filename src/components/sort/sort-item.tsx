import { SortOptionLabel } from './const';
import { SortOptionType } from './types';
import { setSortOption } from '../../store/action';
import { selectSortOption } from '../../store/selectors';
import useAppDispatch from '../../hooks/use-app-dispatch';
import useAppSelector from '../../hooks/use-app-selector';

type SortItemProps = {
  itemSortOption: SortOptionType;
  setIsOpen: (isOpen: boolean) => void;
};

function SortItem(props: SortItemProps): JSX.Element {
  const { itemSortOption, setIsOpen } = props;
  const currentSortOption = useAppSelector(selectSortOption);
  const dispatch = useAppDispatch();

  const className =
    itemSortOption === currentSortOption
      ? 'places__option places__option--active'
      : 'places__option';

  const handleItemClick = (): void => {
    dispatch(setSortOption(itemSortOption));
    setIsOpen(false);
  };

  return (
    <li className={className} tabIndex={0} onClick={handleItemClick}>
      {SortOptionLabel[itemSortOption]}
    </li>
  );
}

export default SortItem;
