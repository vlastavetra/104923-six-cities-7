import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {AppRoute} from 'const';
import MainPage from 'components/pages/main/main';
import LoginPage from 'components/pages/login/login';
import OfferPage from 'components/pages/offer/offer';
import FavoritePage from 'components/pages/favorites/favorites';
import NotFoundPage from 'components/pages/404/404';
import offerProp from 'components/modules/offer/offer.prop';
import reviewProp from 'components/modules/review/review.prop';

function App({locations, offers, reviews}) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MainPage
            locations={locations}
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
            offers={offers.filter((el) => el.is_favorite === true)}
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
  locations: PropTypes.arrayOf(PropTypes.string),
  offers: PropTypes.arrayOf(offerProp).isRequired,
  reviews: PropTypes.arrayOf(reviewProp).isRequired,
};

export default App;
