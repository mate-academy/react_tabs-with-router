import { useParams } from 'react-router-dom';
import type { Tab } from './types/Tab';

type Props = {
  tabs: Tab[];
};

export default function TabSelect({ tabs }: Props) {
  const { tabId } = useParams<{ tabId: string }>();

  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <div className="block" data-cy="TabContent">
      {selectedTab ? selectedTab.content : 'Please select a tab'}
    </div>
  );
}