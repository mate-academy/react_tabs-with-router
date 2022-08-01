import { useParams } from 'react-router-dom';
import { tabs } from './tabs';

type Props = {
  onSelect: (tab: Tab | null) => void,
  selected: Tab | null,
};

export const TabsPage: React.FC<Props> = ({ onSelect, selected }) => {
  const { tabId } = useParams<{ tabId: string; }>();

  onSelect(tabs.find(tab => tab.id === tabId) || null);

  return selected ? (
    <h1>{selected.content}</h1>
  ) : (
    <h1>Not found!</h1>
  );
};
