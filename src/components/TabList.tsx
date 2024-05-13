import { FC } from 'react';
import { Tabs } from './Tabs';
import { TabsProvider } from '../providers/TabProvider';

export const TabList: FC = () => (
  <TabsProvider>
    <h1 className="title">Tabs page</h1>
    <Tabs />
  </TabsProvider>
);
