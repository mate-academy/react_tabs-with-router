import React, { FC, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { TabInterface } from '../../interfaces/TabInterface';
import { TabsList } from '../TabsList';

type TabsProps = {
  tabs: TabInterface[];
};

export const Tabs: FC<TabsProps> = ({ tabs }) => {
  const { pathname } = useLocation();
  const { push, replace } = useHistory();

  const matches = pathname.match(/^\/tabs\/(.+)$/);

  const activeId = matches ? matches[1].replace('/', '') : tabs[0].id;

  useEffect(() => {
    if (!matches) {
      push(`tabs/${tabs[0].id}`);
    }

    if (!tabs.some(tab => tab.id === activeId)) {
      replace(tabs[0].id);
    }
  });

  const activeTab = tabs.find(tab => activeId === tab.id);

  if (!tabs.length) {
    return <h5>No tabs</h5>;
  }

  return (
    <div className="row">
      <div className="columns">
        <TabsList tabs={tabs} active={activeId} />
      </div>
      <div className="tabs-content">
        <div className="tabs-panel is-active">
          <h5>{activeTab?.title}</h5>
          <p>{activeTab?.content}</p>
        </div>
      </div>
    </div>
  );
};
