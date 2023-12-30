import { useParams } from 'react-router-dom';
import { getTabs } from '../api/tabs';

export const useSelectedTab = () => {
  const { tabId: selectedTabId } = useParams();

  if (!selectedTabId) {
    return null;
  }

  return getTabs().find(tab => tab.id === selectedTabId);
};
