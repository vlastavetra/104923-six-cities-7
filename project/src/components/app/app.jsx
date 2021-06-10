import React from 'react';
import Main from '../main/main';
import PropTypes from 'prop-types';

function App(props) {
  const {placesCount, cities, cardsCount} = props;

  return (
    <Main
      placesCount={placesCount}
      cities={cities}
      cardsCount={cardsCount}
    />
  );
}

App.propTypes = {
  placesCount: PropTypes.number.isRequired,
  cities: PropTypes.arrayOf(PropTypes.string),
  cardsCount: PropTypes.number.isRequired,
};

export default App;
