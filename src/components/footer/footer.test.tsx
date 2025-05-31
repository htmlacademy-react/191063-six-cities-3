import { render, screen } from '@testing-library/react';
import { withProviders } from '../../utils/mock-components';
import Footer from './footer';

describe('Component: Footer', () => {
  it('should render correctly', () => {
    const expectedTestId = 'footer-test-id';
    const withProvidersComponent = withProviders(<Footer />);

    render(withProvidersComponent);

    expect(screen.getByTestId(expectedTestId)).toBeInTheDocument();
  });
});
