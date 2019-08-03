import React from 'react';
import PropTypes from 'prop-types';

import Article from './Article';
import TabItem from './TabItem';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const Tabs = ({ match }) => (
  <>
    <ul className="nav nav-tabs">
      <TabItem
        tabs={tabs}
        selectedId={match.params.tabId}
      />
    </ul>
    <Article
      tabs={tabs}
      selectedId={match.params.tabId}
    />
  </>
);

Tabs.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object.isRequired,
  }).isRequired,
};

export default Tabs;
