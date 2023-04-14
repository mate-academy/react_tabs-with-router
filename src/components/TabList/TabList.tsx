import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { TabType } from '../../types';
import { Tab } from '../Tab';

interface TabProps {
  tabs: TabType[];
}

export const TabList: FC<TabProps> = ({ tabs }) => {
  const { tabId = '' } = useParams();
  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const { id } = tab;

            return (
              <Tab
                key={id}
                tab={tab}
                tabId={tabId}
              />
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab
          ? selectedTab.content
          : 'Please select a tab'}
      </div>
    </>
  );
};
