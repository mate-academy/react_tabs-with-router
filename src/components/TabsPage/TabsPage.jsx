import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';
import { TabsContent } from '../TabsContent/TabsContent';
import './TabsPage.scss';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage = () => {
  const { tabId } = useParams();
  const [selectedTab, setSelectedTab] = useState(null);
  const [isValid, setIsValid] = useState();

  useEffect(() => {
    const selectedTabId = tabs.find(tab => tab.id === tabId) || null;

    setSelectedTab(selectedTabId);

    if (selectedTabId) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [tabId]);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-centered">
        <ul className="tabs__list">
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={classNames(
                { 'is-active': tab.id === tabId },
                'is-tab',
              )}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      {!isValid && <h1 className="content">Please select a tab</h1>}

      {selectedTab && <TabsContent content={selectedTab.content} />}
    </>
  );
};
