import { render, screen } from '@testing-library/react';
import { getMockAppStore, getMockOfferPreviews } from '../../utils/mock-utils';
import { withProviders, withStore } from '../../utils/mock-components';
import { Cities } from '../../const/app-const';
import MainOffers from './main-offers';

describe('Component: MainOffers', () => {
  const mockOfferPreviews = getMockOfferPreviews();
  const mockAppStore = getMockAppStore();
  const mapTestId = 'map-test-id';

  it('should render correctly with offers', () => {
    const props = {
      currentCity: Cities.Paris,
      offerPreviews: mockOfferPreviews
    };

    const withProvidersComponent = withProviders(<MainOffers {...props} />);
    const { withStoreComponent } = withStore(withProvidersComponent, mockAppStore);

    render(withStoreComponent);

    expect(screen.getByText(`${mockOfferPreviews.length} places to stay in Paris`)).toBeInTheDocument();
    expect(screen.getByRole('list')).toBeInTheDocument();
  });

  it('should render correctly with single offer', () => {
    const singleOffer = [mockOfferPreviews[0]];
    const props = {
      currentCity: Cities.Amsterdam,
      offerPreviews: singleOffer
    };

    const withProvidersComponent = withProviders(<MainOffers {...props} />);
    const { withStoreComponent } = withStore(withProvidersComponent, mockAppStore);

    render(withStoreComponent);

    expect(screen.getByText('1 place to stay in Amsterdam')).toBeInTheDocument();
  });

  it('should render map section', () => {
    const props = {
      currentCity: Cities.Paris,
      offerPreviews: mockOfferPreviews
    };

    const withProvidersComponent = withProviders(<MainOffers {...props} />);
    const { withStoreComponent } = withStore(withProvidersComponent, mockAppStore);

    render(withStoreComponent);

    expect(screen.getByTestId(mapTestId)).toBeInTheDocument();
  });

  it('should render sort component', () => {
    const props = {
      currentCity: Cities.Paris,
      offerPreviews: mockOfferPreviews
    };

    const withProvidersComponent = withProviders(<MainOffers {...props} />);
    const { withStoreComponent } = withStore(withProvidersComponent, mockAppStore);

    render(withStoreComponent);

    expect(screen.getByText('Sort by')).toBeInTheDocument();
  });
});
