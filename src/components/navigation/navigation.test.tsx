import { render, screen } from '@testing-library/react';
import { withProviders, withStore } from '../../utils/mock-components';
import { getMockAppStore } from '../../utils/mock-utils';
import { CITIES } from '../../const/app-const';
import Navigation from './navigation';

describe('Component: Navigation', () => {
  const mockAppStore = getMockAppStore();

  it('should render correctly with all cities', () => {
    const withProvidersComponent = withProviders(<Navigation />);
    const { withStoreComponent } = withStore(withProvidersComponent, mockAppStore);

    render(withStoreComponent);

    Object.values(CITIES).forEach((city) => {
      expect(screen.getByText(city.name)).toBeInTheDocument();
    });
  });

  it('should highlight active city', () => {
    const currentCity = CITIES.Paris;
    const mockStoreWithCity = {
      ...mockAppStore,
      Offers: {
        ...mockAppStore.Offers,
        city: currentCity
      }
    };

    const withProvidersComponent = withProviders(<Navigation />);
    const { withStoreComponent } = withStore(withProvidersComponent, mockStoreWithCity);

    render(withStoreComponent);

    const activeCityLink = screen.getByText(currentCity.name).closest('a');
    expect(activeCityLink).toHaveClass('tabs__item--active');
  });
});
