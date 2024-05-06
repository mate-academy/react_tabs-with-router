import { useParams } from 'react-router-dom';
import { getContent } from '../utils/utils';

export const TabContent = () => {
  const { tabId } = useParams();
  const selectedTabId = tabId ? tabId : '';

  return (
    <div className="block" data-cy="TabContent">
      {getContent(selectedTabId)}
    </div>
  );
};
