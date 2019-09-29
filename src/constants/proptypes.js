import PropTypes from 'prop-types';

export const TabTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  index: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  handleTabClick: PropTypes.func.isRequired,
};

export const TabsListTypes = {
  tabs: PropTypes.arrayOf({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};
