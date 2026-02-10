// src/components/Tabs.tsx
import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import cn from 'classnames';

import {
  Tabs as ReactTabs,
  TabList,
  Tab,
  TabPanel,
} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { Tab as TabType } from '../types/Tab';

type Props = {
  tabs: TabType[];
};

export const Tabs: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams<{ tabId?: string }>();
  const navigate = useNavigate();

  const selectedIndex = Math.max(
    0,
    tabs.findIndex(tab => tab.id === tabId),
  );

  return (
    <div data-cy="TabsComponent">
      <ReactTabs
        selectedIndex={selectedIndex}
        onSelect={index => {
          navigate(`/tabs/${tabs[index].id}`);
        }}
      >
        <TabList className="tabs is-boxed">
          {tabs.map(tab => (
            <Tab
              key={tab.id}
              data-cy="Tab"
              className={cn('react-tabs__tab')}
              selectedClassName="is-active"
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </Tab>
          ))}
        </TabList>

        {tabs.map(tab => (
          <TabPanel key={tab.id}>
            {tab.content}
          </TabPanel>
        ))}
      </ReactTabs>
    </div>
  );
};
