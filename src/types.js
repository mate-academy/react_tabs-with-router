import PropTypes from 'prop-types';

export const TabType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
});
