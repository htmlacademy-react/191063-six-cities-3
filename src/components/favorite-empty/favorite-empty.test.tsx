import { render, screen } from '@testing-library/react';
import { withProviders } from '../../utils/mock-components';
import FavoriteEmpty from './favorite-empty';

describe('Component: FavoriteEmpty', () => {
  it('should render correctly', () => {
    const expectedTestId = 'favorite-empty-test-id';
    const withProvidersComponent = withProviders(<FavoriteEmpty />);

    render(withProvidersComponent);

    expect(screen.getByTestId(expectedTestId)).toBeInTheDocument();
  });
});
