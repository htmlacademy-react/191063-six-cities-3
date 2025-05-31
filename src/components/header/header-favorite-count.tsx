import { offersSelectors } from '../../store/slices/offers-slice/offers-slice';
import useAppSelector from '../../hooks/use-app-selector';

function HeaderFavoriteCount(): JSX.Element {
  const favoriteOffersCount = useAppSelector(
    offersSelectors.selectFavoriteOfferPreviews
  ).length;

  return <span className="header__favorite-count">{favoriteOffersCount}</span>;
}

export default HeaderFavoriteCount;
