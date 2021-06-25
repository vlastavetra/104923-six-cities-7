import React from 'react';
import Offer from '../../modules/offer/offer';
import PropTypes from 'prop-types';

function OffersList (props) {
  const {page, offers, onListItemHover} = props;

  const getClassByPage = (el) => {
    switch (el) {
      case 'main':
        return 'cities__places-list tabs__content';
      case 'offer':
        return 'near-places__list';
      case 'favorites':
        return 'favorites__places';
      default: break;
    }
    return 'cities__places-list tabs__content';
  };

  return (
    <div className={`${getClassByPage(page)} places__list`}>
      { offers.map((offer) => (
        <Offer
          onListItemHover={onListItemHover}
          page={page}
          key={offer.id}
          offer={offer}
        />
      ))}
    </div>
  );
}

OffersList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
  page: PropTypes.string.isRequired,
  onListItemHover: PropTypes.func,
};

export default OffersList;
