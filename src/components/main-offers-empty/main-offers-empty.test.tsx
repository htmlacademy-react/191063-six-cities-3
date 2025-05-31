import { render, screen } from '@testing-library/react';
import { withProviders } from '../../utils/mock-components';
import { Cities } from '../../const/app-const';
import MainOffersEmpty from './main-offers-empty';

describe('Component: MainOffersEmpty', () => {
  const expectedTitle = 'No places to stay available';
  it('should render correctly with Paris city', () => {
    const props = {
      currentCity: Cities.Paris
    };

    const withProvidersComponent = withProviders(<MainOffersEmpty {...props} />);
    render(withProvidersComponent);

    expect(screen.getByText(expectedTitle)).toBeInTheDocument();
    expect(screen.getByText(/We could not find any property available at the moment in Paris/)).toBeInTheDocument();
  });

  it('should render correctly with Amsterdam city', () => {
    const props = {
      currentCity: Cities.Amsterdam
    };

    const withProvidersComponent = withProviders(<MainOffersEmpty {...props} />);
    render(withProvidersComponent);

    expect(screen.getByText(expectedTitle)).toBeInTheDocument();
    expect(screen.getByText(/We could not find any property available at the moment in Amsterdam/)).toBeInTheDocument();
  });
});
