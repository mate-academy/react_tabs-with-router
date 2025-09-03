import { useContext } from 'react';
import { Tabs } from '../components/Tabs';
import { useParams } from 'react-router-dom';
import { TabContext } from '../store/TabContext';

export const TabsPage = () => {
  const { tabs } = useContext(TabContext);
  const { tabId } = useParams();

  return (
    <div className="TabsPage">
      <h1 className="title">Tabs page</h1>
      <Tabs tabs={tabs} tabId={tabId} />
    </div>
  );
};
