import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Tabs } from '../components/Tabs';
import { Tab as TabType } from '../types/Tab';

const tabs: TabType[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage: React.FC = () => {
  const { tabId } = useParams<{ tabId?: string }>();
  const navigate = useNavigate();

  const selectedTab = tabs.find(t => t.id === tabId);

  const handleSelect = (tab: TabType) => {
    navigate(`/tabs/${tab.id}`);
  };

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <Tabs tabs={tabs} selectedTab={selectedTab} onSelect={handleSelect} />
    </>
  );
};
