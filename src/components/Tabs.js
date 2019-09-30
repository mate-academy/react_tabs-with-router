import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Tab from './Tab';

const Tabs = ({ tabs, match }) => (
  <div>
    <ul className="tabs">
      {tabs.map(tab => <Tab key={tab.id} tab={tab} />)}
    </ul>
    <div className="tabs__text">
      {tabs.map(tab => (tab.id === match.params.tabId ? tab.content : null))}
    </div>
  </div>
);

const shape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
});

const shape2 = PropTypes.shape({
  tabId: PropTypes.string,
}).isRequired;

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(shape).isRequired,
  match: PropTypes.shape({
    params: shape2,
  }).isRequired,
};
export default withRouter(Tabs);
