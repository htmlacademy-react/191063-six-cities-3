import MainScreen from '../../pages/main-screen/main-screen';

type AppScreenProps = {
  placeCardCount: number;
}

function App({placeCardCount}: AppScreenProps): JSX.Element {
  return (
    <MainScreen placeCardCount={placeCardCount} />
  );
}

export default App;
