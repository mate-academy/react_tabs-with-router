import { TabItem } from '../TabItem';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
};

export const TabList: React.FC<Props> = ({ tabs, selectedTabId }) => {
  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <TabItem
            tab={tab}
            selectedTabId={selectedTabId}
            key={tab.id}
          />
        ))}
      </ul>
    </div>
  );
};
