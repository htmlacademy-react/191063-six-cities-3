import { City } from '../../types/city';
import { getCitiesNames } from '../../utils/city-utils';
import NavigationItem from './navigation-item';

type NavigationProps = {
  currentCity: City;
};

function Navigation(props: NavigationProps): JSX.Element {
  const { currentCity } = props;
  const citiesNames = getCitiesNames();

  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {citiesNames.map((cityName) => (
              <NavigationItem
                key={cityName}
                title={cityName}
                currentCity={currentCity}
              />
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}

export default Navigation;
