import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { tabs } from '../api/tabs';
import { Tab } from '../types/Tab';

type Props = {
  onSelect: (tab: Tab | null) => void,
  selectedTab: Tab | null,
};

export const TabsPage: React.FC<Props> = ({ onSelect, selectedTab }) => {
  const { tabId } = useParams<{ tabId: string; }>();

  useEffect(() => {
    onSelect(tabs.find(tab => tab.id === tabId) || null);
  }, [tabId]);

  return (
    <h1>
      {selectedTab ? selectedTab.content : 'Please, select a tab'}
    </h1>
  );
};
