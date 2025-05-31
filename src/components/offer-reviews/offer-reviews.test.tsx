import { render, screen } from '@testing-library/react';
import { withProviders, withStore } from '../../utils/mock-components';
import { getMockAppStore, getMockCurrentUser, getMockOfferFull, getMockReviews } from '../../utils/mock-utils';
import { AuthorizationStatus, RequestStatus } from '../../const/api-const';
import { UserSlice } from '../../types/store-types';
import OfferReviews from './offer-reviews';
import ReviewForm from '../review-form';

describe('Component: OfferReviews', () => {
  const mockOfferFull = getMockOfferFull();
  const mockReviews = getMockReviews();
  const mockCurrentUser = getMockCurrentUser();
  const mockReviewForm = <ReviewForm offerId={mockOfferFull.id} />;
  const reviewsFromTestId = 'review-form-test-id';

  it('should render correctly with reviews and logged in user', () => {
    const mockInitialUserSlice: UserSlice = {
      currentUser: mockCurrentUser,
      authStatus: AuthorizationStatus.Auth,
      authRequestStatus: RequestStatus.Idle,
    };

    const mockAppStore = getMockAppStore({
      User: mockInitialUserSlice,
    });

    const withProvidersComponent = withProviders(
      <OfferReviews reviews={mockReviews} reviewForm={mockReviewForm} />
    );
    const { withStoreComponent } = withStore(withProvidersComponent, mockAppStore);

    render(withStoreComponent);

    // expect(screen.getByText(`Reviews · ${mockReviews.length}`)).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(mockReviews.length);
    expect(screen.getByTestId(reviewsFromTestId)).toBeInTheDocument();
  });

  it('should render correctly with reviews and logged out user', () => {
    const mockInitialUserSlice: UserSlice = {
      currentUser: null,
      authStatus: AuthorizationStatus.NoAuth,
      authRequestStatus: RequestStatus.Idle,
    };

    const mockAppStore = getMockAppStore({
      User: mockInitialUserSlice,
    });

    const withProvidersComponent = withProviders(
      <OfferReviews reviews={mockReviews} reviewForm={mockReviewForm} />
    );
    const { withStoreComponent } = withStore(withProvidersComponent, mockAppStore);

    render(withStoreComponent);

    // expect(screen.getByText(`Reviews · ${mockReviews.length}`)).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(mockReviews.length);
    expect(screen.queryByTestId(reviewsFromTestId)).not.toBeInTheDocument();
  });

  it('should render correctly with empty reviews array', () => {
    const mockInitialUserSlice: UserSlice = {
      currentUser: null,
      authStatus: AuthorizationStatus.NoAuth,
      authRequestStatus: RequestStatus.Idle,
    };

    const mockAppStore = getMockAppStore({
      User: mockInitialUserSlice,
    });

    const withProvidersComponent = withProviders(
      <OfferReviews reviews={[]} reviewForm={mockReviewForm} />
    );
    const { withStoreComponent } = withStore(withProvidersComponent, mockAppStore);

    render(withStoreComponent);

    // expect(screen.getByText('Reviews · 0')).toBeInTheDocument();
    expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
    expect(screen.queryByTestId(reviewsFromTestId)).not.toBeInTheDocument();
  });

  it('should sort reviews by date in descending order', () => {
    const mockInitialUserSlice: UserSlice = {
      currentUser: null,
      authStatus: AuthorizationStatus.NoAuth,
      authRequestStatus: RequestStatus.Idle,
    };

    const mockAppStore = getMockAppStore({
      User: mockInitialUserSlice,
    });

    const withProvidersComponent = withProviders(
      <OfferReviews reviews={mockReviews} reviewForm={mockReviewForm} />
    );
    const { withStoreComponent } = withStore(withProvidersComponent, mockAppStore);

    render(withStoreComponent);

    const reviewItems = screen.getAllByRole('listitem');
    const reviewDates = reviewItems.map((item) => item.querySelector('time')?.getAttribute('datetime'));

    // Check if dates are in descending order
    const isDescending = reviewDates.every((date, index) =>
      index === 0 || new Date(date!) <= new Date(reviewDates[index - 1]!));

    expect(isDescending).toBe(true);
  });
});
