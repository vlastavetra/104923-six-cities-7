import React from 'react';
import {MAX_STARS, PlaceType} from '../../../const';
import {Link} from 'react-router-dom';
import Header from '../../modules/header/header';
import Footer from '../../modules/footer/footer';
import PropTypes from 'prop-types';

function Faforites(props) {
  const {offers} = props;
  const cities = new Set();

  offers.forEach((offer) => cities.add(offer.city.name));

  const filterOffersByCity = (arr, cityName) =>
    arr.filter((el) => el.city.name === cityName);

  const getStars = (num) => (num / MAX_STARS) * 100;

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
                    {filterOffersByCity(offers, city).map((offer) => (
                      <article key={offer.id} className="favorites__card place-card">
                        <div className="favorites__image-wrapper place-card__image-wrapper">
                          <Link to={`/offer/${offer.id}`}>
                            <img className="place-card__image" src="img/apartment-small-03.jpg" width="150" height="110" alt={offer.title} />
                          </Link>
                        </div>
                        <div className="favorites__card-info place-card__info">
                          <div className="place-card__price-wrapper">
                            <div className="place-card__price">
                              <b className="place-card__price-value">&euro;{offer.price}</b>
                              <span className="place-card__price-text">&#47;&nbsp;night</span>
                            </div>
                            <button
                              className={`place-card__bookmark-button button
                                ${offer.is_favorite && 'place-card__bookmark-button--active'}`}
                              type="button"
                            >
                              <svg
                                className="place-card__bookmark-icon"
                                width="18"
                                height="19"
                              >
                                <use xlinkHref="#icon-bookmark"></use>
                              </svg>
                              <span className="visually-hidden">To bookmarks</span>
                            </button>
                          </div>
                          <div className="place-card__rating rating">
                            <div className="place-card__stars rating__stars">
                              <span style={{width: `${getStars(offer.rating)}%`}}></span>
                              <span className="visually-hidden">Rating</span>
                            </div>
                          </div>
                          <h2 className="place-card__name">
                            <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
                          </h2>
                          <p className="place-card__type">{PlaceType[offer.type]}</p>
                        </div>
                      </article>
                    ))}
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
