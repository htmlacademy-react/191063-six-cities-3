import useAppDispatch from '../../hooks/use-app-dispatch';
import useAppSelector from '../../hooks/use-app-selector';
import { setCity } from '../../store/action';
import { City } from '../../types/city';

type NavigationItemProps = {
  itemCity: City;
};

function NavigationItem(props: NavigationItemProps): JSX.Element {
  const { itemCity } = props;
  const currentCity = useAppSelector((state) => state.city);
  const activeClass = itemCity.name === currentCity.name ? ' tabs__item--active' : '';
  const dispatch = useAppDispatch();

  const handleItemClick = () => {
    dispatch(setCity(itemCity));
  };

  return (
    <li className="locations__item">
      <a
        className={`locations__item-link tabs__item${activeClass}`}
        onClick={handleItemClick}
      >
        <span>{itemCity.name}</span>
      </a>
    </li>
  );
}

export default NavigationItem;
