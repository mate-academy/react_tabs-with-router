import React from 'react';
import { useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';
import { getCurrentTabContent } from '../../Utils/helpers';
import { TabLink } from '../TabLink';

interface Props {
  tabs: Tab[]
}

export const TabsPage: React.FC<Props> = React.memo(({ tabs }) => {
  const { tabId = '' } = useParams();
  const content = getCurrentTabContent(tabs, tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <TabLink key={tab.id} tab={tab} tabId={tabId} />
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {content}
      </div>
    </>
  );
});
