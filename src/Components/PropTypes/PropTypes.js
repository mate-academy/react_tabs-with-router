import PropTypes from 'prop-types';

export const TabsProps = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      tabId: PropTypes.string,
    }),
  }),
  tabs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
  })),
};

export const TabsPageProps = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      tabId: PropTypes.string,
    }),
  }),
};
