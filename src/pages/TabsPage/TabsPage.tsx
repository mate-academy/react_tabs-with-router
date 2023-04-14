import { FC } from 'react';
import { tabs } from '../../api';
import { TabList } from '../../components/TabList';

export const TabsPage: FC = () => {
  return (
    <>
      <h1 className="title">Tabs page</h1>

      <TabList tabs={tabs} />
    </>
  );
};
