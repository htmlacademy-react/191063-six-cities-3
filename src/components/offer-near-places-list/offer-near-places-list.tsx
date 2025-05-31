import { OfferPreview } from '../../types/offer';
import OfferCardMedium from '../../components/offer-card-medium';

type OfferNearPlacesListProps = {
  offerPreviews: OfferPreview[];
  onOfferCardHover: (hoveredOffer: OfferPreview | null) => void;
};

function OfferNearPlacesList(props: OfferNearPlacesListProps): JSX.Element {
  const { offerPreviews, onOfferCardHover } = props;

  return (
    <div className="near-places__list places__list">
      {offerPreviews.map((offerPreview) => (
        <OfferCardMedium
          key={offerPreview.id}
          offerPreview={offerPreview}
          onHover={onOfferCardHover}
        />
      ))}
    </div>
  );
}

export default OfferNearPlacesList;
