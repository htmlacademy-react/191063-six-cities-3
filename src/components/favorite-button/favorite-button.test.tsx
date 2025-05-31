import { render, screen } from '@testing-library/react';
import { withProviders, withStore } from '../../utils/mock-components';
import { getMockAppStore, getMockOfferFull } from '../../utils/mock-utils';
import FavoriteButton from './favorite-button';

describe('Component: FavoriteButton', () => {
  const mockAppStore = getMockAppStore();
  const mockOffer = getMockOfferFull();

  it('should render correctly with Offer type and not favorite state', () => {
    const withProvidersComponent = withProviders(
      <FavoriteButton
        buttonType="Offer"
        offerId={mockOffer.id}
        isFavorite={false}
      />
    );
    const { withStoreComponent } = withStore(withProvidersComponent, mockAppStore);

    render(withStoreComponent);

    expect(screen.getByText('To bookmarks')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveClass('offer__bookmark-button');
    expect(screen.getByRole('button')).not.toHaveClass('offer__bookmark-button--active');
  });

  it('should render correctly with PlaceCard type and favorite state', () => {
    const withProvidersComponent = withProviders(
      <FavoriteButton
        buttonType="PlaceCard"
        offerId={mockOffer.id}
        isFavorite
      />
    );
    const { withStoreComponent } = withStore(withProvidersComponent, mockAppStore);

    render(withStoreComponent);

    expect(screen.getByText('In bookmarks')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveClass('place-card__bookmark-button');
    expect(screen.getByRole('button')).toHaveClass('place-card__bookmark-button--active');
  });

  it('should render correctly with Offer type and favorite state', () => {
    const withProvidersComponent = withProviders(
      <FavoriteButton
        buttonType="Offer"
        offerId={mockOffer.id}
        isFavorite
      />
    );
    const { withStoreComponent } = withStore(withProvidersComponent, mockAppStore);

    render(withStoreComponent);

    expect(screen.getByText('In bookmarks')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveClass('offer__bookmark-button');
    expect(screen.getByRole('button')).toHaveClass('offer__bookmark-button--active');
  });

  it('should render correctly with PlaceCard type and not favorite state', () => {
    const withProvidersComponent = withProviders(
      <FavoriteButton
        buttonType="PlaceCard"
        offerId={mockOffer.id}
        isFavorite={false}
      />
    );
    const { withStoreComponent } = withStore(withProvidersComponent, mockAppStore);

    render(withStoreComponent);

    expect(screen.getByText('To bookmarks')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveClass('place-card__bookmark-button');
    expect(screen.getByRole('button')).not.toHaveClass('place-card__bookmark-button--active');
  });
});
