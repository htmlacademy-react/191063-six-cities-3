import { OfferPreview } from '../../types/offer';

type MainMapProps = {
  hoveredOffer: OfferPreview | null;
};

function MainMap(props: MainMapProps): JSX.Element {
  const { hoveredOffer } = props;

  return (
    <section className="cities__map map">
      <p>{hoveredOffer?.id}</p>
    </section>
  );
}

export default MainMap;
