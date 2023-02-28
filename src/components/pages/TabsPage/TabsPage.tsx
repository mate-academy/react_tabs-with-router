import classNames from 'classnames';
import React from 'react';
import { useParams } from 'react-router-dom';
import { Tab } from '../../../types/Tab';
import { TabLink } from '../../TabLink';

type Props = {
  tabs: Tab[]
};

export const TabsPage: React.FC<Props> = React.memo(({ tabs }) => {
  const { tabId: selectedTabId } = useParams();

  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || null;

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={classNames({ 'is-active': tab.id === selectedTabId })}
            >
              <TabLink tab={tab} />
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab
          ? (selectedTab.content)
          : ('Please select a tab')}
      </div>
    </>
  );
});
