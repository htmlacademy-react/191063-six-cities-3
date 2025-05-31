import { FavoriteButtonType } from './favorite-button-type';
import {
  getFavoriteButtonClasses,
  getFavoriteButtonSize,
} from './favorite-button-utils';

type FavoriteButtonProps = {
  buttonType: FavoriteButtonType;
  isFavorite: boolean;
  onClick: (evt: React.MouseEvent<HTMLButtonElement>) => void;
};

function FavoriteButton(props: FavoriteButtonProps): JSX.Element {
  const { buttonType, isFavorite, onClick } = props;
  const classes = getFavoriteButtonClasses(buttonType);
  const iconSize = getFavoriteButtonSize(buttonType);
  const activeClass = isFavorite ? classes.activeClass : '';
  const label = isFavorite ? 'In bookmarks' : 'To bookmarks';

  return (
    <button
      className={`${classes.buttonClass} ${activeClass}`}
      type="button"
      onClick={onClick}
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
