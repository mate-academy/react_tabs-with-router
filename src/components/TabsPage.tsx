import { tabs } from '../api/tabs';
import { TabsList } from './TabsList';

export const TabsPage = () => (
  <div className="container">
    <h1 className="title">Tabs page</h1>

    <TabsList tabs={tabs} />
  </div>
);
