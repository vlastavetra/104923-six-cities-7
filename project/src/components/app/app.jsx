import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {AppRoute} from 'const';
import MainPage from 'components/pages/main/main';
import LoginPage from 'components/pages/login/login';
import OfferPage from 'components/pages/offer/offer';
import FavoritePage from 'components/pages/favorites/favorites';
import NotFoundPage from 'components/pages/404/404';
import LoadingScreen from 'components/modules/loadingScreen/loadingScreen';

function App({locations, isDataLoaded}) {
  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MainPage
            locations={locations}
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
  locations: PropTypes.arrayOf(PropTypes.string),
  isDataLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = ({isDataLoaded}) => ({
  isDataLoaded,
});

export {App};
export default connect(mapStateToProps)(App);
