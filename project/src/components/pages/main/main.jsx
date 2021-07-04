import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Header from 'components/modules/header/header';
import OffersList from 'components/modules/offersList/offersList';
import LocationsList from 'components/modules/locationsList/locationsList';
import Map from 'components/modules/map/map';

function Main(props) {
  const {locations, currentLocation, offers} = props;

  const offersByLocation = offers.filter((offer) => offer.city.name === currentLocation);

  const [selectedPoint, setSelectedPoint] = useState(0);

  const onListItemHover = (listItemName) => {
    const currentPoint = offers.find((offer) =>
      offer.id === listItemName,
    );
    setSelectedPoint(currentPoint);
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
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by </span>
                <span className="places__sorting-type" tabIndex="0">
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="visually-hidden places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex="0">Popular</li>
                  <li className="places__option" tabIndex="0">Price: low to high</li>
                  <li className="places__option" tabIndex="0">Price: high to low</li>
                  <li className="places__option" tabIndex="0">Top rated first</li>
                </ul>
              </form>
              <OffersList
                page='main'
                offers={offersByLocation}
                onListItemHover={onListItemHover}
              />
            </section>
            <div className="cities__right-section">
              <section className='cities__map map'>
                <Map
                  offers={offers}
                  selectedPoint={selectedPoint}
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
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = ({currentLocation, offers}) => ({
  currentLocation,
  offers,
});

export default connect(mapStateToProps)(Main);
