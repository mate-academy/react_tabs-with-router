import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { TabsList } from '../components/TabList';
import { Tab } from '../types/Tab';
import { TabContext } from '../TabsContext';

export const TabsPage: React.FC = () => {
  const tabs: Tab[] = useContext(TabContext);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <TabsList tabs={tabs} />
      <Outlet />
    </>
  );
};
