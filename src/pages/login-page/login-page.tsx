import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { offersActions } from '../../store/slices/offers-slice/offers-slice';
import { AppRoute, CITIES } from '../../const/app-const';
import { getRandomElement } from '../../utils/common-utils';
import Header from '../../components/header';
import useAppDispatch from '../../hooks/use-app-dispatch';
import LoginForm from '../../components/login-form';

function LoginPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const randomCity = getRandomElement(Object.values(CITIES));

  const handleCityClick = (evt: React.MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    dispatch(offersActions.setCity(randomCity));
    navigate(AppRoute.Root);
  };

  return (
    <div className="page page--gray page--login" data-testid="login-page-test-id">
      <Helmet>
        <title>6 Cities. Login</title>
      </Helmet>
      <Header showUser={false} />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <LoginForm />
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" onClick={handleCityClick}>
                <span>{randomCity?.name}</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
