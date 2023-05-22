import { Tab } from '../../types/Tab';
import { TabItem } from '../TabItem';

interface Props {
  tabs: Tab[];
  selectedTabId: string;
}

export const TabsList: React.FC<Props> = ({ tabs, selectedTabId }) => {
  const currentTab = tabs.find(tab => tab.id === selectedTabId);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const { id, title } = tab;

            return (
              <TabItem
                id={id}
                title={title}
                selectedTabId={selectedTabId}
              />
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {currentTab?.content || 'Please select a tab'}
      </div>
    </>
  );
};
