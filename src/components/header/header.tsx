import { userSelectors } from '../../store/slices/user-slice/user-slice';
import { offersSelectors } from '../../store/slices/offers-slice/offers-slice';
import Logo from '../logo';
import HeaderUser from './header-user';
import HeaderSignIn from './header-sign-in';
import HeaderSignOut from './header-sign-out';
import useAppSelector from '../../hooks/use-app-selector';

type HeaderProps = {
  showUser: boolean;
};

function Header(props: HeaderProps): JSX.Element {
  const { showUser } = props;
  const currentUser = useAppSelector(userSelectors.selectCurrentUser);
  const favoriteOffersCount = useAppSelector(
    offersSelectors.selectFavoriteOfferPreviews
  ).length;

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
                  <HeaderUser
                    user={currentUser}
                    favoriteOffersCount={favoriteOffersCount}
                  />
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

export default Header;
