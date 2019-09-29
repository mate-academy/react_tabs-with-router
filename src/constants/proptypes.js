import PropTypes from 'prop-types';

const tabsShape = PropTypes.shape({
  id: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
}).isRequired;

export const TabsPagePropTypes = {
  tabs: PropTypes.arrayOf(tabsShape).isRequired,
  currentTabId: PropTypes.string,
};

export const TabsPropTypes = {
  tabs: PropTypes.arrayOf(tabsShape).isRequired,
};
