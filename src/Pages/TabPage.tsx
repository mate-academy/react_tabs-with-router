import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';
import { Navbar } from '../components/Navbar';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabPage: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<Tab | undefined>(undefined);
  const { tabId } = useParams();

  useEffect(() => {
    const selected = tabs.find(tab => tab.id === tabId);

    setSelectedTab(selected);
  }, [tabId]);

  return (
    <>
      <Navbar />
      <div className="section">
        <div className="container">
          <h1 className="title">Tabs page</h1>

          <div className="tabs is-boxed">
            <ul>
              {tabs.map(tab => (
                <li
                  key={tab.id}
                  data-cy="Tab"
                  className={cn({ 'is-active': tab.id === tabId })}
                >
                  <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="block" data-cy="TabContent">
            {selectedTab ? selectedTab.content : 'Please select a tab'}
          </div>
        </div>
      </div>
    </>
  );
};
