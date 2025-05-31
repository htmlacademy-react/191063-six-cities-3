import { render, screen, fireEvent } from '@testing-library/react';
import { withProviders, withStore } from '../../utils/mock-components';
import { getMockAppStore } from '../../utils/mock-utils';
import { RatingOption } from '../../const/app-const';
import ReviewForm from './review-form';

describe('Component: ReviewForm', () => {
  const mockAppStore = getMockAppStore();
  const mockOfferId = 'test-offer-id';

  it('should render correctly with initial state', () => {
    const props = {
      offerId: mockOfferId
    };

    const withProvidersComponent = withProviders(<ReviewForm {...props} />);
    const { withStoreComponent } = withStore(withProvidersComponent, mockAppStore);

    render(withStoreComponent);

    expect(screen.getByText('Your review')).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Tell how was your stay/)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('should enable submit button when form is valid', () => {
    const props = {
      offerId: mockOfferId
    };

    const withProvidersComponent = withProviders(<ReviewForm {...props} />);
    const { withStoreComponent } = withStore(withProvidersComponent, mockAppStore);

    render(withStoreComponent);

    // Select a rating
    const ratingInput = screen.getByTitle(RatingOption.Good.title);
    fireEvent.click(ratingInput);


    // Enter a valid comment
    const commentInput = screen.getByPlaceholderText(/Tell how was your stay/);
    fireEvent.change(commentInput, {
      target: { value: 'This is a valid review comment that is long enough to meet the minimum length requirement.' }
    });

    expect(screen.getByRole('button')).not.toBeDisabled();
  });

  it('should disable submit button when comment is too short', () => {
    const props = {
      offerId: mockOfferId
    };

    const withProvidersComponent = withProviders(<ReviewForm {...props} />);
    const { withStoreComponent } = withStore(withProvidersComponent, mockAppStore);

    render(withStoreComponent);

    // Select a rating
    const ratingInput = screen.getByTitle(RatingOption.NotBad.title);
    fireEvent.click(ratingInput);

    // Enter a short comment
    const commentInput = screen.getByPlaceholderText(/Tell how was your stay/);
    fireEvent.change(commentInput, {
      target: { value: 'Too short' }
    });

    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('should disable submit button when no rating is selected', () => {
    const props = {
      offerId: mockOfferId
    };

    const withProvidersComponent = withProviders(<ReviewForm {...props} />);
    const { withStoreComponent } = withStore(withProvidersComponent, mockAppStore);

    render(withStoreComponent);

    // Enter a valid comment without selecting rating
    const commentInput = screen.getByPlaceholderText(/Tell how was your stay/);
    fireEvent.change(commentInput, {
      target: { value: 'This is a valid review comment that is long enough to meet the minimum length requirement.' }
    });

    expect(screen.getByRole('button')).toBeDisabled();
  });
});
