import { OfferPreview } from '../../types/offer';

type OfferMapProps = {
  hoveredOffer: OfferPreview | null;
};

function OfferMap(props: OfferMapProps): JSX.Element {
  const { hoveredOffer } = props;

  return (
    <section className="offer__map map">
      <p>{hoveredOffer?.id}</p>
    </section>
  );
}

export default OfferMap;
