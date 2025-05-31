import { Link } from 'react-router-dom';
import { CurrentUser } from '../../types/user-types';
import { AppRoute } from '../../const/app-const';
import HeaderFavoriteCount from './header-favorite-count';

type HeaderUserProps = {
  user: CurrentUser;
};

function HeaderUser(props: HeaderUserProps): JSX.Element {
  const { user } = props;

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
        <HeaderFavoriteCount />
      </Link>
    </li>
  );
}

export default HeaderUser;
