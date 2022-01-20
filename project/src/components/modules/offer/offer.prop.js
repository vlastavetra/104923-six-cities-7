import PropTypes from 'prop-types';

export default PropTypes.shape({
  'bedrooms': PropTypes.number,
  'city': PropTypes.shape({
    'location': PropTypes.objectOf(PropTypes.number),
    'name': PropTypes.string,
  }),
  'description': PropTypes.string,
  'goods': PropTypes.arrayOf(PropTypes.string),
  'host': PropTypes.shape({
    'avatar_url': PropTypes.string,
    'id': PropTypes.string.isRequired,
    'is_pro': PropTypes.bool,
    'name': PropTypes.string,
  }),
  'id': PropTypes.number.isRequired,
  'images': PropTypes.arrayOf(PropTypes.string),
  'is_favorite': PropTypes.bool,
  'is_premium': PropTypes.bool,
  'location': PropTypes.objectOf(PropTypes.number),
  'max_adults': PropTypes.number,
  'preview_image': PropTypes.string,
  'price': PropTypes.number,
  'rating': PropTypes.number,
  'title': PropTypes.string,
  'type': PropTypes.string,
}).isRequired;
