import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { TabsList } from '../components/TabsList/TabsList';
import { Tab } from '../types/Tab';
import { TabContext } from '../contexts/TabContext';

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
