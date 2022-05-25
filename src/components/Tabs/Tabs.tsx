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
  const [selectedTab, setSelectedTab] = useState<Tab | null>(null);
  const [isTabSelected, setIsTabSelected] = useState(false);
  const { tabId } = useParams<{ tabId: string }>();
  const legitId = tabs.map(tab => tab.id);

  useEffect(() => {
    if (tabId && !legitId.includes(tabId)) {
      setIsTabSelected(false);
    }
  }, [tabId]);

  return (
    <div className="tabs-list">
      {!isTabSelected ? (
        <h1 className="tabs-list__message">
          Please select a tab
        </h1>
      ) : (
        <h1 className="tabs-list__message">
          Some message
        </h1>
      )}

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
