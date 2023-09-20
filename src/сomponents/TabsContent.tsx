import { useParams } from 'react-router-dom';
import { tabs } from '../tabs';

export const TabsContent = () => {
  const { tabId } = useParams();
  const tabContent = tabs.find(({ id }) => tabId === id)?.content
    || 'Please select a tab';

  return (
    <div className="block" data-cy="TabContent">
      {tabContent}
    </div>
  );
};
