import { TabItem } from '../TabItem/TabItem';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
  activeTabId: string | undefined;
};

export const TabsNavigation: React.FC<Props> = ({ tabs, activeTabId }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const { id, title } = tab;

            return (
              <TabItem
                key={id}
                id={id}
                activeTabId={activeTabId}
                title={title}
              />
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {(activeTab && activeTab.content) || 'Please select a tab'}
      </div>
    </>
  );
};
