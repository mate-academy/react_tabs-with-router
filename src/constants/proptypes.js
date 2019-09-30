import PropTypes from 'prop-types';

export const TabProps = {
  tab: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
  }),
};

export const TabsPageProps = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.string,
    }).isRequired,
  ).isRequired,
};
