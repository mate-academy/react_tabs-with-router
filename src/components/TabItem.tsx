import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { TabsContext } from '../context/TabsContext';

export const TabItem = () => {
  const { tabId } = useParams();
  const tabs = useContext(TabsContext);
  const tab = tabs.find(item => item.id === tabId);

  return tab ? <p>{tab.content}</p> : <p>Please select a tab</p>;
};
