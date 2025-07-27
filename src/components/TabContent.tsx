import { useParams } from 'react-router-dom';
import { useTabs } from '../context/ContextCreate';

export const TabContent = () => {
  const { tabId } = useParams();

  const tabing = useTabs();

  const tab = tabing.find(t => t.id === tabId);

  if (!tab) {
    return (
      <div className="block" data-cy="TabContent">
        Please select a tab
      </div>
    );
  }

  return (
    <div className="block" data-cy="TabContent">
      <p>{tab?.content}</p>
    </div>
  );
};
