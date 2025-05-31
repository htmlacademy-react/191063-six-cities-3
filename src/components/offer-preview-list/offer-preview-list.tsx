import { memo } from 'react';
import { OfferPreview, OfferPreviews } from '../../types/offer-types';
import {
  getOfferPreviewListClasses,
  OfferPreviewListType,
} from './offer-preview-list-utils';
import { OfferCardType } from '../offer-card/offer-card-utils';
import OfferCard from '../offer-card';

export type OfferPreviewListComponentProps = {
  listType: OfferPreviewListType;
  cardType: OfferCardType;
  offerPreviews: OfferPreviews;
  onOfferCardHover?: (hoveredOffer: OfferPreview | null) => void;
};

function OfferPreviewListComponent(
  props: OfferPreviewListComponentProps
): JSX.Element {
  const { listType, cardType, offerPreviews, onOfferCardHover } = props;
  const additionalClasses = getOfferPreviewListClasses(listType);

  return (
    <div className={additionalClasses.divClass}>
      {offerPreviews.map((offerPreview) => (
        <OfferCard
          key={offerPreview.id}
          cardType={cardType}
          offerPreview={offerPreview}
          onHover={onOfferCardHover}
        />
      ))}
    </div>
  );
}

const OfferPreviewList = memo(OfferPreviewListComponent);

export default OfferPreviewList;
