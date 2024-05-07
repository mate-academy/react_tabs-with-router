import { useContext } from 'react';
import { TabContext } from '../store/TabProvider';
import { TabsList } from '../conponents/TabsList';

export const TabsPage: React.FC = () => {
  const { tabs } = useContext(TabContext);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <TabsList tabs={tabs} />
    </>
  );
};
