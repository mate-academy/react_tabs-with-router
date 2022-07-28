import { FC } from 'react';
import { tabs } from '../../data/tabs';
import { TabList } from '../TabList/TabList';

export const TabsPage: FC = () => {
  return (
    <div className="tabs is-centered is-toggle is-large App__Tab">
      <TabList
        tabs={tabs}
      />
    </div>
  );
};
