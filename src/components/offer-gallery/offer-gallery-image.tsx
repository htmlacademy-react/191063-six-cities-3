type OfferGalleryImageProps = {
  src: string;
};

function OfferGalleryImage(props: OfferGalleryImageProps): JSX.Element {
  const { src } = props;

  return (
    <div className="offer__image-wrapper">
      <img className="offer__image" src={src} alt="Photo studio" />
    </div>
  );
}

export default OfferGalleryImage;
