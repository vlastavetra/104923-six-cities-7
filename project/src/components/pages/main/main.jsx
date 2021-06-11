import React from 'react';
import Header from '../../modules/header/header';
import Card from '../../modules/card/card';
import PropTypes from 'prop-types';

function Main(props) {
  const {placesCount, cities, cardsCount} = props;
  const cards = new Array(placesCount).fill('').map((value, index) => ({id: value + index}));
  const defaultCity = 'Amsterdam';

  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              { cities.map((city) => (
                <li className="locations__item" key={city}>
                  <a
                    className={city === defaultCity ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'}
                    href="#"
                  >
                    <span>{city}</span>
                  </a>
                </li>
              )) }
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{placesCount} places to stay in Amsterdam</b>
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
              <div className="cities__places-list places__list tabs__content">
                { cards.slice(0, cardsCount).map((card) => <Card key={card.id}/>)}
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

Main.propTypes = {
  placesCount: PropTypes.number.isRequired,
  cities: PropTypes.arrayOf(PropTypes.string),
  cardsCount: PropTypes.number.isRequired,
};

export default Main;
