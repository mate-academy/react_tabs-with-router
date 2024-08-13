import React from 'react';
import { useParams } from 'react-router-dom';
import { List } from '../components/List';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const Tabs = () => {
  const { tabID } = useParams();
  const selectedTab = tabs.find(tab => tab.id === tabID);

  return (
    <React.Fragment>
      <h1 className="title">Tabs page</h1>

      <List tabs={tabs} />

      {!selectedTab && (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      )}
    </React.Fragment>
  );
};
