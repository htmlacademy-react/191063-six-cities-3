import { OfferPreview, OfferPreviews } from '../../types/offer-types';
import { OfferPreviewListType } from './offer-preview-list-type';
import { getOfferPreviewListClasses } from './offer-preview-list-utils';
import { updateFavoriteOfferType } from '../../hooks/use-update-favorite-offer';
import OfferCardMedium from '../../components/offer-card-medium';

type OfferPreviewListProps = {
  listType: OfferPreviewListType;
  offerPreviews: OfferPreviews;
  onOfferCardHover?: (hoveredOffer: OfferPreview | null) => void;
  onFavoriteClick: updateFavoriteOfferType;
};

function OfferPreviewList(props: OfferPreviewListProps): JSX.Element {
  const { listType, offerPreviews, onOfferCardHover, onFavoriteClick } = props;
  const additionalClasses = getOfferPreviewListClasses(listType);

  return (
    <div className={additionalClasses.divClass}>
      {offerPreviews.map((offerPreview) => (
        <OfferCardMedium
          key={offerPreview.id}
          cardType={listType}
          offerPreview={offerPreview}
          onHover={onOfferCardHover}
          onFavoriteClick={onFavoriteClick}
        />
      ))}
    </div>
  );
}

export default OfferPreviewList;
