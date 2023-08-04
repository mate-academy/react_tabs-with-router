import { useParams } from 'react-router-dom';
import { TabItem } from './TabItem';
import { Tab } from '../types/Tab';

export interface Props {
  tabs: Tab[];
}

export const TabsList: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();
  const selectedTab = tabId ? tabs.find(tab => tabId === tab.id) : null;

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <TabItem
                key={tab.id}
                tab={tab}
                tabId={tabId || ''}
              />
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {
          selectedTab
            ? selectedTab.content
            : 'Please select a tab'
        }
      </div>
    </>
  );
};
