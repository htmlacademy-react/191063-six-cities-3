import { OfferPreview, OfferPreviews } from '../../types/offer';
import { OfferPreviewListType } from './offer-preview-list-type';
import { getOfferPreviewListClasses } from './offer-preview-list-utils';
import OfferCardMedium from '../../components/offer-card-medium';

type OfferPreviewListProps = {
  listType: OfferPreviewListType;
  offerPreviews: OfferPreviews;
  onOfferCardHover?: (hoveredOffer: OfferPreview | null) => void;
};

function OfferPreviewList(props: OfferPreviewListProps): JSX.Element {
  const { listType, offerPreviews, onOfferCardHover } = props;
  const additionalClasses = getOfferPreviewListClasses(listType);

  return (
    <div className={additionalClasses.divClass}>
      {offerPreviews.map((offerPreview) => (
        <OfferCardMedium
          key={offerPreview.id}
          cardType={listType}
          offerPreview={offerPreview}
          onHover={onOfferCardHover}
        />
      ))}
    </div>
  );
}

export default OfferPreviewList;
