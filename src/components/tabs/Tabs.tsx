import { TabItem } from './TabItem';
import type { Tab } from '../../data/tabs';

type TabsProps = {
  tabs: Tab[];
  activeTabId?: string;
};

export const Tabs = ({ tabs, activeTabId }: TabsProps) => (
  <div className="tabs is-boxed">
    <ul>
      {tabs.map(tab => (
        <TabItem key={tab.id} tab={tab} isActive={tab.id === activeTabId} />
      ))}
    </ul>
  </div>
);
