import { memo } from 'react';
import { userSelectors } from '../../store/slices/user-slice/user-slice';
import useAppSelector from '../../hooks/use-app-selector';
import HeaderSignOut from './header-sign-out';
import HeaderSignIn from './header-sign-in';
import HeaderUser from './header-user';
import Logo from '../logo';

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
            <Logo logoType='Header' />
          </div>
          {showUser && (
            <nav className="header__nav">
              <ul className="header__nav-list">
                {currentUser && <HeaderUser user={currentUser} />}
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
