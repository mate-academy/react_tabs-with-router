import { Tab } from '../Tab/Tab';
import { Props } from './Props';

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
}) => {
  const selectedTab = tabs.find(tab => `Tab-${tab.id}` === `Tab-${selectedTabId}`);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <Tab tab={tab} selectedTabId={selectedTabId} />
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab
          ? selectedTab.content
          : <span>Please select a tab</span>}
      </div>
    </div>
  );
};
