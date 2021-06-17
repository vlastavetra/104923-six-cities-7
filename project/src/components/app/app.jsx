import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {AppRoute} from '../../const';
import MainPage from '../pages/main/main';
import LoginPage from '../pages/login/login';
import OfferPage from '../pages/offer/offer';
import FavoritePage from '../pages/favorites/favorites';
import NotFoundPage from '../pages/404/404';
import PropTypes from 'prop-types';
import offerProp from '../modules/offer/offer.prop';
import reviewProp from '../modules/review/review.prop';

function App({cities, cardsCount, offers, reviews}) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MainPage
            cities={cities}
            cardsCount={cardsCount}
            offers={offers}
          />
        </Route>
        <Route path={AppRoute.LOGIN} exact>
          <LoginPage/>
        </Route>
        <Route path={AppRoute.OFFER} exact>
          <OfferPage
            offers={offers}
            reviews={reviews}
          />
        </Route>
        <Route path={AppRoute.FAVORITES} exact>
          <FavoritePage
            offers={offers}
          />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string),
  cardsCount: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(offerProp).isRequired,
  reviews: PropTypes.arrayOf(reviewProp).isRequired,
};

export default App;
