/* eslint-disable no-console */
import React, { memo, useEffect, useState } from 'react';
import {
  NavLink,
  useParams,
} from 'react-router-dom';
import classNames from 'classnames';

import { Tab } from '../../types/Tabs';

import './Tabs.scss';

type Props = {
  tabs: Tab[];
};

export const Tabs: React.FC<Props> = memo(({
  tabs,
}) => {
  const { tabId } = useParams<{ tabId: string }>();
  const legitId = tabs.map(tab => tab.id);
  const [selectedTab, setSelectedTab] = useState<Tab | null>(null);
  const [isTabSelected, setIsTabSelected] = useState(false);

  useEffect(() => {
    if (tabId && !legitId.includes(tabId)) {
      setSelectedTab(null);
      setIsTabSelected(false);
    }

    if (tabId && legitId.includes(tabId)) {
      setSelectedTab(tabs[+tabId[tabId.length - 1] - 1]);
      setIsTabSelected(true);
    }
  }, [tabId]);

  return (
    <div className="tabs-list">
      <h1 className="tabs-list__message">
        {isTabSelected ? 'Some message' : 'Please select'}
      </h1>

      <div className="tabs-list__navigation">
        {tabs.map(tab => (
          <div
            key={tab.id}
            className="tab"
          >
            <NavLink
              to={`/cards/${tab.id}`}
              className={classNames(
                'tab__button',
                { selected: tabId === tab.id && isTabSelected },
              )}
              onClick={() => {
                setIsTabSelected(true);
                setSelectedTab(tab);
              }}
            >
              {tab.title}
            </NavLink>
          </div>
        ))}
      </div>

      {selectedTab && (
        <div className="tabs-list__content">
          {selectedTab.content}
        </div>
      )}
    </div>
  );
});
