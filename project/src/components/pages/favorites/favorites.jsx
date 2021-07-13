import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Header from 'components/modules/header/header';
import Footer from 'components/modules/footer/footer';
import OffersList from 'components/modules/offersList/offersList';

function Faforites(props) {
  const {offers} = props;

  const favoriteOffers = offers.filter((offer) => offer.isFavorite === true);

  const cities = new Set();

  favoriteOffers.forEach((offer) => cities.add(offer.city.name));

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

const mapStateToProps = ({offers}) => ({
  offers,
});

export default connect(mapStateToProps)(Faforites);
