import PropTypes from 'prop-types';

export default PropTypes.shape({
  'id': PropTypes.number.isRequired,
  'comment': PropTypes.string,
  'date': PropTypes.string.isRequired,
  'rating': PropTypes.number,
  'user': {
    'avatar_url': PropTypes.string,
    'id': PropTypes.number.isRequired,
    'is_pro': PropTypes.bool,
    'name': PropTypes.string.isRequired,
  },
}).isRequired;
