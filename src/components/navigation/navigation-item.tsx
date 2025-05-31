import { City } from '../../types/city';
import { setCity } from '../../store/action';
import { selectCity } from '../../store/selectors';
import useAppDispatch from '../../hooks/use-app-dispatch';
import useAppSelector from '../../hooks/use-app-selector';

type NavigationItemProps = {
  itemCity: City;
};

function NavigationItem(props: NavigationItemProps): JSX.Element {
  const { itemCity } = props;
  const currentCity = useAppSelector(selectCity);
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
