import React from 'react';
import PropTypes from 'prop-types';
import Tabs from './Tabs';

const tabs = [
  {
    id: 'tab-1', title: 'Tab 1', content: 'Some text 1',
  },
  {
    id: 'tab-2', title: 'Tab 2', content: 'Some text 2',
  },
  {
    id: 'tab-3', title: 'Tab 3', content: 'Some text 3',
  },
];

const TabsPage = ({ match }) => (
  <>
    <h2>Tabs</h2>
    <Tabs tabs={tabs} />
    <div>
      {(tabs.find(tab => tab.id === match.params.key)
      || {}).content}
    </div>

  </>
);

TabsPage.propTypes = {
  match: PropTypes.shape({ path: PropTypes.string.isRequired }).isRequired,
};

export default TabsPage;
