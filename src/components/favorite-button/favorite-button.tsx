import useUpdateFavoriteOffer from '../../hooks/use-update-favorite-offer';
import {
  FavoriteButtonType,
  getFavoriteButtonClasses,
  getFavoriteButtonSize,
} from './favorite-button-utils';

type FavoriteButtonProps = {
  buttonType: FavoriteButtonType;
  offerId: string;
  isFavorite: boolean;
};

function FavoriteButton(props: FavoriteButtonProps): JSX.Element {
  const { buttonType, offerId, isFavorite } = props;
  const updateFavoriteClick = useUpdateFavoriteOffer();
  const classes = getFavoriteButtonClasses(buttonType);
  const iconSize = getFavoriteButtonSize(buttonType);
  const activeClass = isFavorite ? classes.activeClass : '';
  const label = isFavorite ? 'In bookmarks' : 'To bookmarks';

  const handleFavoriteClick = () => {
    updateFavoriteClick({
      offerId,
      status: Number(!isFavorite)
    });
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
