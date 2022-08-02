import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { tabs } from '../api/tabs';
import { Tab } from '../types/Tab';

type Props = {
  onSelect: (tab: Tab | null) => void,
  selected: Tab | null,
};

export const TabsPage: React.FC<Props> = ({ onSelect, selected }) => {
  const { tabId } = useParams<{ tabId: string; }>();

  useEffect(() => {
    onSelect(tabs.find(tab => tab.id === tabId) || null);
  }, [tabId]);

  return selected ? (
    <h1>{selected.content}</h1>
  ) : (
    <h1>Please, select a tab</h1>
  );
};
