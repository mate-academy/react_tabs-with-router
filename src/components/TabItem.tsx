import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { TabsContext } from '../context/TabsContext';
import { Tab } from '../types/Tab';

export const TabItem = () => {
  const { tabId } = useParams();
  const tabs = useContext(TabsContext);
  const tab = tabs.find((item: Tab) => item.id === tabId);

  return tab ? <p>{tab.content}</p> : <p>Please select a tab</p>;
};
