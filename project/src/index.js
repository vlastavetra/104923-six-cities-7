import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  PLACES_COUNT: 312,
  CITIES: ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'],
  CARDS_COUNT: 5,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      placesCount={Setting.PLACES_COUNT}
      cities={Setting.CITIES}
      cardsCount={Setting.CARDS_COUNT}
    />
  </React.StrictMode>,
  document.getElementById('root'));
