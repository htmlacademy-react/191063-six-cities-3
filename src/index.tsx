import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { placeCardCount } from './const';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App placeCardCount={placeCardCount} />
  </React.StrictMode>
);
