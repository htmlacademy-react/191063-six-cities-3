import { getCapitalizedString, pluralize } from '../../utils/common-utils';

type OfferFeaturesProps = {
  type: string;
  bedrooms: number;
  maxAdults: number;
};

function OfferFeatures(props: OfferFeaturesProps): JSX.Element {
  const { type, bedrooms, maxAdults } = props;

  return (
    <ul className="offer__features">
      <li className="offer__feature offer__feature--entire">
        {getCapitalizedString(type)}
      </li>
      <li className="offer__feature offer__feature--bedrooms">
        {bedrooms} {pluralize('Bedroom', bedrooms)}
      </li>
      <li className="offer__feature offer__feature--adults">
        Max {maxAdults} {pluralize('adult', maxAdults)}
      </li>
    </ul>
  );
}

export default OfferFeatures;
