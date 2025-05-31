import { City } from '../../types/city';

type NavigationItemProps = {
  title: string;
  currentCity: City;
};

function NavigationItem(props: NavigationItemProps): JSX.Element {
  const { title, currentCity } = props;
  const activeClass = currentCity.name === title ? ' tabs__item--active' : '';

  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item${activeClass}`} href="#">
        <span>{title}</span>
      </a>
    </li>
  );
}

export default NavigationItem;
