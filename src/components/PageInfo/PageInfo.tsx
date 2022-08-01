import { useParams } from 'react-router-dom';
import { tabs } from '../../api/tabs';

export const PageInfo = () => {
  const tabId = useParams();

  const currentPageInfo = tabs.find(tab => tab.id === tabId.id);

  return (
    <p className="subtitle is-3">{currentPageInfo?.content}</p>
  );
};
