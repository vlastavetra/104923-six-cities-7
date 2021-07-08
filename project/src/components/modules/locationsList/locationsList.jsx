import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { ActionCreator } from 'store/action';

function LocationsList (props) {
  const {locations, currentLocation, setLocation} = props;

  return (
    <ul className="locations__list tabs__list">
      { locations.map((city) => (
        <li className="locations__item" key={city}>
          <a
            className={city === currentLocation ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'}
            href="#"
            onClick={() => {
              setLocation(city);
            }}
          >
            <span>{city}</span>
          </a>
        </li>
      )) }
    </ul>
  );
}

LocationsList.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentLocation: PropTypes.string.isRequired,
  setLocation: PropTypes.func.isRequired,
};

const mapStateToProps = ( {currentCity} ) => ({
  currentCity,
});

const mapDispatchToProps = (dispatch) => ({
  setLocation(currentCity) {
    dispatch(ActionCreator.setLocation(currentCity));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationsList);
