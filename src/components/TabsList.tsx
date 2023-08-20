import { TabItem } from './TabItem';
import { Tab } from '../types/Tab';

type TabsListProps = {
  tabs: Tab[];
  selectedTabId: string;
};

export const TabsList = ({ tabs, selectedTabId }: TabsListProps) => (
  <div className="tabs is-boxed">
    <ul>
      {tabs.map(tab => (
        <TabItem
          key={tab.id}
          tab={tab}
          isActive={selectedTabId === tab.id}
        />
      ))}
    </ul>
  </div>
);
