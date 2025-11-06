import classNames from 'classnames';
import React, { useMemo } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Tabs as RTabs, TabList, Tab } from 'react-tabs';
import { Tab as TabModel } from '../types/Tab';

const tabs: TabModel[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage: React.FC = () => {
  const { tabId } = useParams<{ tabId?: string }>();
  const navigate = useNavigate();
  const indexById = useMemo(
    () => new Map(tabs.map((t, i) => [t.id, i] as const)),
    [],
  );
  const isValid = !!tabId && indexById.has(tabId);
  const selectedIndex = isValid ? indexById.get(tabId!)! : 0;
  const activeTab = isValid ? tabs[selectedIndex] : null;

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>

        <RTabs
          selectedIndex={selectedIndex}
          onSelect={i => {
            navigate(`/tabs/${tabs[i].id}`);

            return true;
          }}
        >
          <div className="tabs is-boxed">
            <TabList>
              {tabs.map(tab => {
                const isActive = tab.id === tabId;

                return (
                  <Tab
                    key={tab.id}
                    data-cy="Tab"
                    className={classNames({ 'is-active': isActive })}
                  >
                    <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
                  </Tab>
                );
              })}
            </TabList>
          </div>
        </RTabs>
        {/*  */}

        <div className="block" data-cy="TabContent">
          {activeTab ? activeTab.content : 'Please select a tab'}
        </div>
      </div>
    </div>
  );
};
