import { useContext } from 'react';
import { TabList } from '../components/TabList';
import { TabContext } from '../stores/TabContext';

export const TabsPage: React.FC = () => {
  const { tabs } = useContext(TabContext);

  return (
    <TabList tabs={tabs} />
  );
};
