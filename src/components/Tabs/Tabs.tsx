import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { tabs } from '../../api/tabs';
import { TabItem } from '../Tab';

export const Tabs: FC = () => {
  const { tabId = '' } = useParams();
  const currentTab = tabs.find(({ id }) => id === tabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <TabItem tab={tab} tabID={tabId} />
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {currentTab?.content || 'Please select a tab'}
      </div>
    </div>
  );
};
