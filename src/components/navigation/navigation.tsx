import { CITIES } from '../../const/app-const';
import NavigationItem from './navigation-item';

function Navigation(): JSX.Element {
  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {Object.values(CITIES).map((city) => (
              <NavigationItem
                key={city.name}
                itemCity={city}
              />
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}

export default Navigation;
