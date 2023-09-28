import { useParams } from 'react-router-dom';
import { tabs } from '../api/tabs';

export const TabContent = () => {
  const { tabId } = useParams();

  const tabContent = tabs.find(({ id }) => id === tabId)?.content
  || 'Please select a tab';

  return (
    <div className="block" data-cy="TabContent">
      {tabContent}
    </div>
  );
};
