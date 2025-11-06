import { useParams } from 'react-router-dom';
import { TabContext } from '../store/TabsContext';
import { useContext } from 'react';

const TabItemPage = () => {
  const { tabId } = useParams();
  const tabs = useContext(TabContext);
  const selectedTab = tabs.find(tab => tab.id === tabId);

  if (!selectedTab) {
    return <p>Please select a tab</p>;
  }

  return <p>{selectedTab.content}</p>;
};

export default TabItemPage;
