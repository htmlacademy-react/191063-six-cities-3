import { render, screen } from '@testing-library/react';
import { FULL_OFFER_IMAGES_COUNT } from '../../const/offer-const';
import { withProviders } from '../../utils/mock-components';
import OfferGallery from './offer-gallery';

describe('Component: OfferGallery', () => {
  it('should render correctly with multiple images', () => {
    const props = {
      images: [
        'https://example.com/image1.jpg',
        'https://example.com/image2.jpg',
        'https://example.com/image3.jpg',
        'https://example.com/image4.jpg',
        'https://example.com/image5.jpg',
        'https://example.com/image6.jpg',
        'https://example.com/image7.jpg'
      ]
    };

    const withProvidersComponent = withProviders(<OfferGallery {...props} />);
    render(withProvidersComponent);

    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(FULL_OFFER_IMAGES_COUNT);
    expect(images[0]).toHaveAttribute('src', 'https://example.com/image1.jpg');
    expect(images[5]).toHaveAttribute('src', 'https://example.com/image6.jpg');
  });

  it('should render correctly with fewer than 6 images', () => {
    const props = {
      images: [
        'https://example.com/image1.jpg',
        'https://example.com/image2.jpg'
      ]
    };

    const withProvidersComponent = withProviders(<OfferGallery {...props} />);
    render(withProvidersComponent);

    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(2);
    expect(images[0]).toHaveAttribute('src', 'https://example.com/image1.jpg');
    expect(images[1]).toHaveAttribute('src', 'https://example.com/image2.jpg');
  });
});
