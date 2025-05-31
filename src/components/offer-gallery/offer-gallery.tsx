import OfferGalleryImage from './offer-gallery-image';

type OfferGalleryProps = {
  images: string[];
};

function OfferGallery(props: OfferGalleryProps): JSX.Element {
  const { images } = props;

  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {images.map((image) => (
          <OfferGalleryImage key={image} src={image} />
        ))}
      </div>
    </div>
  );
}

export default OfferGallery;
