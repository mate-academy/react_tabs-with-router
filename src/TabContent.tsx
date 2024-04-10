import { useParams } from 'react-router-dom';
import { tabItems as tabs } from './tabItems';

export const TabContent = () => {
  const { tabId } = useParams();

  const tabText = tabs.find(tab => tab.id === tabId)?.content;

  return (
    <div className="block" data-cy="TabContent">
      {tabId && tabText}
    </div>
  );
};
