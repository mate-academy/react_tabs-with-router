import { FC } from 'react';
import { TabsProvider } from '../providers/TabsProvider';
import { Tabs } from './Tabs';

export const TabsPage: FC = () => (
  <TabsProvider>
    <h1 className="title">Tabs page</h1>
    <Tabs />
  </TabsProvider>
);
