import { render, screen } from '@testing-library/react';
import { withProviders } from '../../utils/mock-components';
import Logo from './logo';

describe('Component: Logo', () => {
  it('should render correctly', () => {
    const expectedAltText = '6 cities logo';
    const withProvidersComponent = withProviders(<Logo logoType='Header'/>);

    render(withProvidersComponent);

    expect(screen.getByAltText(expectedAltText)).toBeInTheDocument();
  });
});
