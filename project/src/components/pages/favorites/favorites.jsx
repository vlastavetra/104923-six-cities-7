import React from 'react';
import Header from 'components/modules/header/header';
import Footer from 'components/modules/footer/footer';
import OffersList from 'components/modules/offersList/offersList';
import PropTypes from 'prop-types';

function Faforites(props) {
  const {offers} = props;
  const cities = new Set();

  offers.forEach((offer) => cities.add(offer.city.name));

  const onListItemHover = () => {};

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {[...cities].map((city) => (
                <li key={city} className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>{city}</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    <OffersList
                      page='favorites'
                      offers={offers.filter((el) => el.city.name === city)}
                      onListItemHover={onListItemHover}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

Faforites.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Faforites;
