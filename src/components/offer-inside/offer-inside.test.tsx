import { render, screen } from '@testing-library/react';
import { withProviders, withStore } from '../../utils/mock-components';
import { getMockAppStore } from '../../utils/mock-utils';
import OfferInside from './offer-inside';

describe('Component: OfferInside', () => {
  const mockAppStore = getMockAppStore();

  it('should render correctly with goods', () => {
    const goods = ['Wi-Fi', 'Heating', 'Kitchen', 'Cable TV'];

    const withProvidersComponent = withProviders(<OfferInside goods={goods} />);
    const { withStoreComponent } = withStore(withProvidersComponent, mockAppStore);

    render(withStoreComponent);

    expect(screen.getByText(/What's inside/)).toBeInTheDocument();
    goods.forEach((good) => {
      expect(screen.getByText(good)).toBeInTheDocument();
    });
  });

  it('should render correctly with empty goods array', () => {
    const goods: string[] = [];

    const withProvidersComponent = withProviders(<OfferInside goods={goods} />);
    const { withStoreComponent } = withStore(withProvidersComponent, mockAppStore);

    render(withStoreComponent);

    expect(screen.getByText(/What's inside/)).toBeInTheDocument();
    expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
  });
});
