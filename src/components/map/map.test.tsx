import { render, screen } from '@testing-library/react';
import { withProviders, withStore } from '../../utils/mock-components';
import { getMockAppStore, getMockOfferPreviews } from '../../utils/mock-utils';
import { CITIES } from '../../const/app-const';
import Map, { MapProps } from './map';

describe('Component: Map', () => {
  const mockOffers = getMockOfferPreviews();
  const mockAppStore = getMockAppStore();
  const mapTestId = 'map-test-id';

  it('should render correctly with offers', () => {
    const props: MapProps = {
      pageType: 'Main',
      city: CITIES.Paris,
      offerPreviews: mockOffers,
      hoveredOffer: null,
    };

    const withProvidersComponent = withProviders(<Map {...props} />);
    const { withStoreComponent } = withStore(withProvidersComponent, mockAppStore);

    render(withStoreComponent);

    expect(screen.getByTestId(mapTestId)).toBeInTheDocument();
  });

  it('should render correctly with empty offers array', () => {
    const props: MapProps = {
      pageType: 'Main',
      city: CITIES.Paris,
      offerPreviews: [],
      hoveredOffer: null,
    };

    const withProvidersComponent = withProviders(<Map {...props} />);
    const { withStoreComponent } = withStore(withProvidersComponent, mockAppStore);

    render(withStoreComponent);

    expect(screen.getByTestId(mapTestId)).toBeInTheDocument();
  });

  it('should render correctly with selected offer', () => {
    const selectedOfferId = mockOffers[0];
    const props: MapProps = {
      pageType: 'Main',
      city: CITIES.Paris,
      offerPreviews: mockOffers,
      hoveredOffer: selectedOfferId,
    };

    const withProvidersComponent = withProviders(<Map {...props} />);
    const { withStoreComponent } = withStore(withProvidersComponent, mockAppStore);

    render(withStoreComponent);

    expect(screen.getByTestId(mapTestId)).toBeInTheDocument();
  });

  it('should render with different page types', () => {
    const props: MapProps = {
      pageType: 'Offer',
      city: CITIES.Paris,
      offerPreviews: mockOffers,
      hoveredOffer: null,
    };

    const withProvidersComponent = withProviders(<Map {...props} />);
    const { withStoreComponent } = withStore(withProvidersComponent, mockAppStore);

    render(withStoreComponent);

    expect(screen.getByTestId(mapTestId)).toHaveClass('offer__map');
  });
});
