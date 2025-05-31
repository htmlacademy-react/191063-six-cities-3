import { memo } from 'react';
import { userSelectors } from '../../store/slices/user-slice/user-slice';
import Logo from '../logo';
import HeaderUser from './header-user';
import HeaderSignIn from './header-sign-in';
import HeaderSignOut from './header-sign-out';
import useAppSelector from '../../hooks/use-app-selector';

type HeaderComponentProps = {
  showUser: boolean;
};

function HeaderComponent(props: HeaderComponentProps): JSX.Element {
  const { showUser } = props;
  const currentUser = useAppSelector(userSelectors.selectCurrentUser);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          {showUser && (
            <nav className="header__nav">
              <ul className="header__nav-list">
                {currentUser && (
                  <HeaderUser user={currentUser} />
                )}
                {currentUser ? <HeaderSignOut /> : <HeaderSignIn />}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}

const Header = memo(HeaderComponent);

export default Header;
