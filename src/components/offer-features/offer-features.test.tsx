import { render, screen } from '@testing-library/react';
import { withProviders } from '../../utils/mock-components';
import OfferFeatures from './offer-features';

describe('Component: OfferFeatures', () => {
  it('should render correctly with single bedroom and adult', () => {
    const props = {
      type: 'apartment',
      bedrooms: 1,
      maxAdults: 1
    };

    const withProvidersComponent = withProviders(<OfferFeatures {...props} />);
    render(withProvidersComponent);

    expect(screen.getByText('Apartment')).toBeInTheDocument();
    expect(screen.getByText('1 Bedroom')).toBeInTheDocument();
    expect(screen.getByText('Max 1 adult')).toBeInTheDocument();
  });

  it('should render correctly with multiple bedrooms and adults', () => {
    const props = {
      type: 'house',
      bedrooms: 3,
      maxAdults: 4
    };

    const withProvidersComponent = withProviders(<OfferFeatures {...props} />);
    render(withProvidersComponent);

    expect(screen.getByText('House')).toBeInTheDocument();
    expect(screen.getByText('3 Bedrooms')).toBeInTheDocument();
    expect(screen.getByText('Max 4 adults')).toBeInTheDocument();
  });
});
