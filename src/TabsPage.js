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

const searchContent = (id) => {
  const search = tabs.find(item => item.id === id);

  if (search) {
    return search.content;
  }

  return 'Click Tabs';
};

const TabsPage = ({ match }) => (
  <Tabs tabs={tabs}>
    {searchContent(match.params.id)}

  </Tabs>
);

TabsPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  match: PropTypes.object.isRequired,
};

export default TabsPage;
