import { render, screen } from '@testing-library/react';
import { withProviders } from '../../utils/mock-components';
import OfferHost from './offer-host';

describe('Component: OfferHost', () => {
  const expectedText = 'Meet the host';

  it('should render correctly with pro host', () => {
    const props = {
      host: {
        avatarUrl: 'https://example.com/avatar.jpg',
        name: 'John Doe',
        isPro: true
      }
    };

    const withProvidersComponent = withProviders(<OfferHost {...props} />);
    render(withProvidersComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
    expect(screen.getByText(props.host.name)).toBeInTheDocument();
    expect(screen.getByText('Pro')).toBeInTheDocument();
    expect(screen.getByAltText('Host avatar')).toHaveAttribute('src', props.host.avatarUrl);
  });

  it('should render correctly with non-pro host', () => {
    const props = {
      host: {
        avatarUrl: 'https://example.com/avatar.jpg',
        name: 'Jane Smith',
        isPro: false
      }
    };

    const withProvidersComponent = withProviders(<OfferHost {...props} />);
    render(withProvidersComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
    expect(screen.getByText(props.host.name)).toBeInTheDocument();
    expect(screen.queryByText('Pro')).not.toBeInTheDocument();
    expect(screen.getByAltText('Host avatar')).toHaveAttribute('src', props.host.avatarUrl);
  });
});
