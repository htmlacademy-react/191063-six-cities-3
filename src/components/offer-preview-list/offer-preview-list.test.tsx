import { fireEvent, render, screen } from '@testing-library/react';
import OfferPreviewList, { OfferPreviewListComponentProps } from './offer-preview-list';
import { getMockAppStore, getMockOfferPreviews } from '../../utils/mock-utils';
import { withProviders, withStore } from '../../utils/mock-components';

describe('Component: OfferPreviewList', () => {
  const mockAppStore = getMockAppStore();
  const mockOfferPreviews = getMockOfferPreviews();

  it('should render correctly with Cities list type and not empty offers', () => {
    const props: OfferPreviewListComponentProps = {
      listType: 'Cities',
      cardType: 'Cities',
      offerPreviews: mockOfferPreviews,
    };

    const withProvidersComponent = withProviders(<OfferPreviewList {...props} />);
    const { withStoreComponent } = withStore(withProvidersComponent, mockAppStore);

    render(withStoreComponent);

    expect(screen.getAllByRole('article')).toHaveLength(mockOfferPreviews.length);
  });

  it('should render correctly with Near list type and not empty offers', () => {
    const props: OfferPreviewListComponentProps = {
      listType: 'Near',
      cardType: 'Near',
      offerPreviews: mockOfferPreviews,
    };

    const withProvidersComponent = withProviders(<OfferPreviewList {...props} />);
    const { withStoreComponent } = withStore(withProvidersComponent, mockAppStore);

    render(withStoreComponent);

    expect(screen.getAllByRole('article')).toHaveLength(mockOfferPreviews.length);
  });

  it('should render correctly with empty offers array', () => {
    const props: OfferPreviewListComponentProps = {
      listType: 'Cities',
      cardType: 'Cities',
      offerPreviews: [],
    };

    const withProvidersComponent = withProviders(<OfferPreviewList {...props} />);
    const { withStoreComponent } = withStore(withProvidersComponent, mockAppStore);

    render(withStoreComponent);

    expect(screen.queryByRole('article')).not.toBeInTheDocument();
  });

  it('should call onOfferCardHover when hovering over offer card', () => {
    const mockHandleOfferCardHover = vi.fn();
    const props: OfferPreviewListComponentProps = {
      listType: 'Cities',
      cardType: 'Cities',
      offerPreviews: mockOfferPreviews,
      onOfferCardHover: mockHandleOfferCardHover,
    };

    const withProvidersComponent = withProviders(<OfferPreviewList {...props} />);
    const { withStoreComponent } = withStore(withProvidersComponent, mockAppStore);

    render(withStoreComponent);

    const offerCard = screen.getAllByRole('article')[0];
    fireEvent.mouseEnter(offerCard);
    expect(mockHandleOfferCardHover).toHaveBeenCalledWith(mockOfferPreviews[0]);
  });
});
