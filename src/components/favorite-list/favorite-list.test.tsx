import { render, screen } from '@testing-library/react';
import { getMockAppStore, getMockOfferPreviews } from '../../utils/mock-utils';
import { withProviders, withStore } from '../../utils/mock-components';
import FavoriteList from './favorite-list';

describe('Component: FavoriteList', () => {
  it('should render correctly with favorite offers', () => {
    const mockOfferPreviews = getMockOfferPreviews();
    const cities = mockOfferPreviews.map((offer) => offer.city.name);
    const mockAppStore = getMockAppStore();
    const expectedTitle = 'Saved listing';

    const withProvidersComponent = withProviders(
      <FavoriteList offerPreviews={mockOfferPreviews} />
    );
    const { withStoreComponent } = withStore(
      withProvidersComponent,
      mockAppStore
    );

    render(withStoreComponent);

    expect(screen.getByText(expectedTitle)).toBeInTheDocument();
    cities.forEach((city) => {
      expect(screen.getByText(city)).toBeInTheDocument();
    });
  });

  it('should render correctly with empty offers list', () => {
    const mockAppStore = getMockAppStore();
    const expectedTitle = 'Saved listing';

    const withProvidersComponent = withProviders(
      <FavoriteList offerPreviews={[]} />
    );
    const { withStoreComponent } = withStore(
      withProvidersComponent,
      mockAppStore
    );

    render(withStoreComponent);

    expect(screen.getByText(expectedTitle)).toBeInTheDocument();
    expect(screen.getByRole('list')).toBeEmptyDOMElement();
  });
});
