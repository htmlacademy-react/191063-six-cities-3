import { Link } from 'react-router-dom';
import { AppRoute } from '../../const/app-const';

function HeaderSignIn(): JSX.Element {
  return (
    <li className="header__nav-item user">
      <Link
        className="header__nav-link header__nav-link--profile"
        to={AppRoute.Login}
      >
        <div className="header__avatar-wrapper user__avatar-wrapper"></div>
        <span className="header__login">Sign in</span>
      </Link>
    </li>
  );
}

export default HeaderSignIn;
