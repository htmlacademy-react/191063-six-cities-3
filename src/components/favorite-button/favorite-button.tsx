import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { offersActions } from '../../store/slices/offers-slice/offers-slice';
import { userSelectors } from '../../store/slices/user-slice/user-slice';
import { AppRoute } from '../../const/app-const';
import {
  FavoriteButtonType,
  getFavoriteButtonClasses,
  getFavoriteButtonSize,
} from './favorite-button-utils';
import useAppSelector from '../../hooks/use-app-selector';
import useAppDispatch from '../../hooks/use-app-dispatch';

type FavoriteButtonProps = {
  buttonType: FavoriteButtonType;
  offerId: string;
  isFavorite: boolean;
};

function FavoriteButton(props: FavoriteButtonProps): JSX.Element {
  const { buttonType, offerId, isFavorite } = props;
  const isLoggedIn = useAppSelector(userSelectors.selectIsUserLoggedIn);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const classes = getFavoriteButtonClasses(buttonType);
  const iconSize = getFavoriteButtonSize(buttonType);
  const activeClass = isFavorite ? classes.activeClass : '';
  const label = isFavorite ? 'In bookmarks' : 'To bookmarks';

  const handleFavoriteClick = () => {
    if (!isLoggedIn) {
      navigate(AppRoute.Login);
    } else {
      dispatch(offersActions.updateFavoriteOffer({
        offerId,
        status: Number(!isFavorite)
      }))
        .unwrap()
        .catch((error: AxiosError) => {
          toast.warn(error.message);
        });
    }
  };

  return (
    <button
      className={`${classes.buttonClass} ${activeClass}`}
      type="button"
      onClick={handleFavoriteClick}
    >
      <svg
        className={classes.svgClass}
        width={iconSize.width}
        height={iconSize.height}
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{label}</span>
    </button>
  );
}

export default FavoriteButton;
