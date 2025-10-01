import { Link } from 'react-router-dom';
import { Tabs } from 'mate-academy/react_tabs-js';
import { Tab } from '../types/Tab';

type TabsProps = {
  tabs: Tab[];
  activeTabId: string;
};

export const TabsList: React.FC<TabsProps> = ({ tabs, activeTabId }) => {
  const selectedIndex = tabs.findIndex(tab => tab.id === activeTabId);

  return (
    <div data-cy="TabsComponent">
      <Tabs
        tabs={tabs.map(tab => ({
          title: (
            <Link to={`/tabs/${tab.id}`} data-cy="TabLink">
              {tab.title}
            </Link>
          ),
          content: tab.content,
        }))}
        selectedIndex={selectedIndex >= 0 ? selectedIndex : undefined}
      />
    </div>
  );
};
