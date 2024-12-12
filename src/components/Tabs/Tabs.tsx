/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';
import classNames from 'classnames';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const Tabs: React.FC = () => {
  const NOT_SELECTED = 'Please select a tab';
  const [tabContent, setTabContent] = useState(NOT_SELECTED);
  const { tabId } = useParams();

  useEffect(() => {
    const matchingTab = tabs.find(tab => tab.id === tabId);

    if (matchingTab) {
      setTabContent(matchingTab.content);
    } else {
      setTabContent(NOT_SELECTED);
    }
  }, [tabId]);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const { id, title } = tab;
            const isTabSelected = tabId === id;

            return (
              <li
                key={id}
                data-cy="Tab"
                className={classNames({ 'is-active': isTabSelected })}
              >
                <Link to={`/tabs/${id}`}>{title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {tabContent}
      </div>
    </>
  );
};
