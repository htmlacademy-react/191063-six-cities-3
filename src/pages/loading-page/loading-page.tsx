import './styles.css';

function LoadingPage(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <main className="page__main page__main--index">
        <div className="cities">
          <div className='pageContainer'>
            <div className='spinner'></div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default LoadingPage;
