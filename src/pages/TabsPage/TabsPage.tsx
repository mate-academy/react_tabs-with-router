import { FC } from 'react';
import { tabs } from '../../data';
import { TabList } from '../../components/TabList';

export const TabsPage: FC = () => (
  <>
    <h1 className="title">Tabs page</h1>

    <TabList tabs={tabs} />
  </>
);
