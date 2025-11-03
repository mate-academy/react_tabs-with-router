import { useParams } from 'react-router-dom';
import { tabs } from '../data/tabs';

export default function TabContent() {
  const { tabId } = useParams();
  const tab = tabs.find(t => t.id === tabId);

  return (
    <div className="block" data-cy="TabContent">
      {!tab && 'Please select a tab'}
      {tab && tab.content}
    </div>
  );
}
