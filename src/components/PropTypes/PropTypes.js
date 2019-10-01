import PropTypes from 'prop-types';

// eslint-disable-next-line import/prefer-default-export
export const TabsProps = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
  })).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      tabId: PropTypes.string,
    }),
  }),
};

export const TabsPageProps = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }).isRequired,
};
