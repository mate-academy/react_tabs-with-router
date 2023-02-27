import React from 'react';
import { useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';
import { TabLink } from '../TabLink';

type Props = {
  tabs: Tab[]
};
export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId = '' } = useParams();
  const selectedTab = tabs.find(tab => tab.id === tabId);
  const selectedContent = selectedTab?.content || 'Please select a tab';

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <TabLink
              key={tab.id}
              title={tab.title}
              id={tab.id}
              tabId={tabId}
            />
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedContent}
      </div>

    </>
  );
};
