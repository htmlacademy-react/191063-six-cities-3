import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AppRoute } from '../../const';
import Header from '../../components/header';

function NotFoundPage(): JSX.Element {
  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>6 Cities. Not Found</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">404</h1>
            <p className="offer__price-text">Page not Found</p>
            <form className="login__form form">
              <Link to={AppRoute.Root}>
                <button className="login__submit form__submit button">
                  Go to Home
                </button>
              </Link>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default NotFoundPage;
