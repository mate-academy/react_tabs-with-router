import React from 'react';
import PropTypes from 'prop-types';
import Tabs from './Tabs';

const tabs
  = [
    { id: 1, title: 'Tab 1', content: 'Some text 1' },
    { id: 2, title: 'Tab 2', content: 'Some text 2' },
    { id: 3, title: 'Tab 3', content: 'Some text 3' },
  ];

const TabsFolder = ({ match }) => (
  <Tabs
    tabs={tabs}
    activeId={match.params.tabId}
  />
);

TabsFolder.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object.isRequired,
  }).isRequired,
};

export default TabsFolder;
