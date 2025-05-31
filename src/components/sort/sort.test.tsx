import { render, screen, fireEvent } from '@testing-library/react';
import { withProviders, withStore } from '../../utils/mock-components';
import { getMockAppStore } from '../../utils/mock-utils';
import { SortOption } from './sort-const';
import Sort from './sort';

describe('Component: Sort', () => {
  const currentSortOptionTestId = 'current-sort-option-test-id';
  const sortFormTestId = 'sort-form-test-id';

  it('should render correctly with initial state', () => {
    const mockAppStore = getMockAppStore();
    const withProvidersComponent = withProviders(<Sort />);
    const { withStoreComponent } = withStore(
      withProvidersComponent,
      mockAppStore
    );

    render(withStoreComponent);

    expect(screen.getByText('Sort by')).toBeInTheDocument();
    expect(screen.getByTestId(currentSortOptionTestId)).toHaveTextContent(
      SortOption[0]
    );
    expect(screen.getByTestId(sortFormTestId)).toBeInTheDocument();
  });

  it('should toggle sort list visibility on click', () => {
    const mockAppStore = getMockAppStore();
    const withProvidersComponent = withProviders(<Sort />);
    const { withStoreComponent } = withStore(
      withProvidersComponent,
      mockAppStore
    );

    render(withStoreComponent);
    const sortForm = screen.getByTestId(sortFormTestId);

    expect(screen.queryByRole('list')).not.toHaveClass(
      'places__options--opened'
    );

    fireEvent.click(sortForm);
    expect(screen.getByRole('list')).toHaveClass('places__options--opened');

    fireEvent.click(sortForm);
    expect(screen.queryByRole('list')).not.toHaveClass(
      'places__options--opened'
    );
  });

  it('should close sort list on escape key', () => {
    const mockAppStore = getMockAppStore();
    const withProvidersComponent = withProviders(<Sort />);
    const { withStoreComponent } = withStore(
      withProvidersComponent,
      mockAppStore
    );

    render(withStoreComponent);
    const sortForm = screen.getByTestId(sortFormTestId);

    fireEvent.click(sortForm);
    expect(screen.getByRole('list')).toHaveClass('places__options--opened');

    fireEvent.keyDown(document, { key: 'Escape' });
    expect(screen.queryByRole('list')).not.toHaveClass(
      'places__options--opened'
    );
  });

  it('should close sort list on click outside', () => {
    const mockAppStore = getMockAppStore();
    const withProvidersComponent = withProviders(<Sort />);
    const { withStoreComponent } = withStore(
      withProvidersComponent,
      mockAppStore
    );

    render(withStoreComponent);
    const sortForm = screen.getByTestId(sortFormTestId);

    fireEvent.click(sortForm);
    expect(screen.getByRole('list')).toHaveClass('places__options--opened');

    fireEvent.click(document.body);
    expect(screen.queryByRole('list')).not.toHaveClass(
      'places__options--opened'
    );
  });
});
