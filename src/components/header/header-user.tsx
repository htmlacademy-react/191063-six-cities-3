import { Link } from 'react-router-dom';
import { CurrentUser } from '../../types/user-types';
import { AppRoute } from '../../const/app-const';

type HeaderUserProps = {
  user: CurrentUser;
  favoriteOffersCount: number;
};

function HeaderUser(props: HeaderUserProps): JSX.Element {
  const { user, favoriteOffersCount } = props;

  return (
    <li className="header__nav-item user">
      <Link
        className="header__nav-link header__nav-link--profile"
        to={AppRoute.Favorites}
      >
        <div className="header__avatar-wrapper user__avatar-wrapper">
          <img src={user.avatarUrl} alt="Current user avatar." />
        </div>
        <span className="header__user-name user__name">{user.email}</span>
        <span className="header__favorite-count">{favoriteOffersCount}</span>
      </Link>
    </li>
  );
}

export default HeaderUser;
