import { Link } from 'react-router-dom';
import { AppRoute } from '../../const/app-const';
import { userActions } from '../../store/slices/user-slice/user-slice';
import useAppDispatch from '../../hooks/use-app-dispatch';

function HeaderSignOut(): JSX.Element {
  const dispatch = useAppDispatch();

  const handleLogout = (evt: React.MouseEvent<HTMLAnchorElement>): void => {
    evt.preventDefault();
    dispatch(userActions.logout());
  };

  return (
    <li className="header__nav-item">
      <Link
        className="header__nav-link"
        onClick={handleLogout}
        to={AppRoute.Root}
      >
        <span className="header__signout">Sign out</span>
      </Link>
    </li>
  );
}

export default HeaderSignOut;
