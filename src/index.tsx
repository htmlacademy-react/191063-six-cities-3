import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';
import { getMockOfferPreviews } from './mock/offer-previews-mock';

const offerPreviews = getMockOfferPreviews();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offerPreviews={offerPreviews}/>
  </React.StrictMode>
);
