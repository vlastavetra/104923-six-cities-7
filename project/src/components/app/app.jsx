import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {AppRoute} from '../../const';
import MainPage from '../pages/main/main';
import LoginPage from '../pages/login/login';
import OfferPage from '../pages/offer/offer';
import FavoritePage from '../pages/favorites/favorites';
import NotFoundPage from '../pages/404/404';
import PropTypes from 'prop-types';

function App(props) {
  const {placesCount, cities, cardsCount} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MainPage
            placesCount={placesCount}
            cities={cities}
            cardsCount={cardsCount}
          />
        </Route>
        <Route path={AppRoute.LOGIN} exact>
          <LoginPage/>
        </Route>
        <Route path={AppRoute.OFFER} exact>
          <OfferPage/>
        </Route>
        <Route path={AppRoute.FAVORITES} exact>
          <FavoritePage/>
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  placesCount: PropTypes.number.isRequired,
  cities: PropTypes.arrayOf(PropTypes.string),
  cardsCount: PropTypes.number.isRequired,
};

export default App;
