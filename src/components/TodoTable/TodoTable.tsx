import { FC } from 'react';
import { Tab } from '../../types/Tab';
import { TabLink } from '../TabLink';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
};

export const TodoTable: FC<Props> = ({ tabs, selectedTabId }) => {
  const tabContent
    = tabs.find(tab => tab.id === selectedTabId)?.content || null;

  return (
    <div className="container">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const isActive = tab.id === selectedTabId;

            return (
              <TabLink
                key={tab.id}
                tab={tab}
                isActive={isActive}
              />
            );
          })}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {tabContent || 'Please select a tab'}
      </div>
    </div>
  );
};
