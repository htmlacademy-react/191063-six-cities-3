import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function HeaderSignOut(): JSX.Element {
  return (
    <li className="header__nav-item">
      <Link className="header__nav-link" to={AppRoute.Root}>
        <span className="header__signout">Sign out</span>
      </Link>
    </li>
  );
}

export default HeaderSignOut;
