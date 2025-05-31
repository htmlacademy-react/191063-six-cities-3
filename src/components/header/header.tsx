import { useLocation } from 'react-router-dom';
import { isRequiredPage } from '../../utils/app-utils';
import { selectCurrentUser } from '../../store/selectors';
import { AppRoute } from '../../const';
import Logo from '../logo';
import HeaderUser from './header-user';
import HeaderSignIn from './header-sign-in';
import HeaderSignOut from './header-sign-out';
import useAppSelector from '../../hooks/use-app-selector';

function Header(): JSX.Element {
  const { pathname } = useLocation();
  const currentUser = useAppSelector(selectCurrentUser);
  const isLoginPage = isRequiredPage(pathname, AppRoute.Login);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          {!isLoginPage && (
            <nav className="header__nav">
              <ul className="header__nav-list">
                {currentUser && <HeaderUser user={currentUser}/>}
                {currentUser ? <HeaderSignOut /> : <HeaderSignIn />}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
