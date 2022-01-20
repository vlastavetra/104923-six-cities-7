import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {sortOffers} from 'utils';
import Header from 'components/modules/header/header';
import SortForm from 'components/modules/sortForm/sortForm';
import OffersList from 'components/modules/offersList/offersList';
import LocationsList from 'components/modules/locationsList/locationsList';
import Map from 'components/modules/map/map';
import {loadOffersList} from 'store/api-actions';

function Main(props) {
  const {locations, currentLocation, offers, currentSorting, loadOffers} = props;

  const [selectedPointId, setSelectedPointId] = useState(0);

  useEffect(() => {
    loadOffers();
  }, []);

  const offersByLocation = offers.filter((offer) => offer.city.name === currentLocation);

  const onListItemHover = (listItemId) => {
    setSelectedPointId(listItemId);
  };

  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationsList
              locations={locations}
              currentLocation={currentLocation}
            />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersByLocation.length} places to stay in {currentLocation}</b>
              <SortForm
                currentSorting={currentSorting}
              />
              <OffersList
                page='main'
                offers={sortOffers(currentSorting, offersByLocation)}
                onListItemHover={onListItemHover}
              />
            </section>
            <div className="cities__right-section">
              <section className='cities__map map'>
                <Map
                  offers={offersByLocation}
                  selectedPointId={selectedPointId}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

Main.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentLocation: PropTypes.string.isRequired,
  currentSorting: PropTypes.string.isRequired,
  loadOffers: PropTypes.func.isRequired,
  offers: PropTypes.array,
};

const mapStateToProps = ({currentLocation, offers, currentSorting}) => ({
  currentLocation,
  currentSorting,
  offers,
});

const mapDispatchToProps = (dispatch) => ({
  loadOffers() {
    dispatch(loadOffersList());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
