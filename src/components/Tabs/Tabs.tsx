import { Route, Routes, useParams } from 'react-router-dom';
import React from 'react';
import { Tab } from '../Tab/Tab';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type TabContentProps = {
  content: string;
};

const TabContent: React.FC<TabContentProps> = ({ content }) => (
  <div className="block" data-cy="TabContent">
    {content}
  </div>
);

export const Tabs: React.FC = () => {
  const { tabId } = useParams<{ tabId: string }>();

  const activeTabContent = tabs.find(tab => tab.id === tabId)?.content;

  return (
    <div>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <Tab key={tab.id} id={tab.id} title={tab.title} />
          ))}
        </ul>
      </div>

      <Routes>
        {tabs.map(tab => (
          <Route
            key={tab.id}
            path={`/tabs/${tab.id}`}
            element={<TabContent content={tab.content} />}
          />
        ))}

        <Route
          path="/"
          element={(
            <div className="block" data-cy="TabContent">
              {activeTabContent || 'Please select a tab'}
            </div>
          )}
        />
      </Routes>
    </div>
  );
};
