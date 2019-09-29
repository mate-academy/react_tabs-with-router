import PropTypes from 'prop-types';

export const TabTypes = {
  title: PropTypes.string.isRequired,
  index: PropTypes.string.isRequired,
};

export const TabsPageTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
};
