import React from 'react';
import PropTypes from 'prop-types';

import Tabs from '../Tabs/Tabs';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const TabsPage = ({ match }) => (
  <>
    <ul className="tab-list">
      <Tabs tabs={tabs} />
    </ul>
    <p>
      {tabs.find(item => item.id === match.params.tabId)
      && tabs.find(item => item.id === match.params.tabId).content}
    </p>
  </>
);

TabsPage.propTypes = {
  match: PropTypes.string.isRequired,
};

export default TabsPage;
