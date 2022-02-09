import React, { useState } from 'react';
import classNames from 'classnames';
import './TabsPage.scss';

import {
  Link,
  Routes,
  Route,
} from 'react-router-dom';

import { TabContent } from '../TabContent';

interface Tab {
  id: string,
  title: string,
  content: string,
}

type Props = {
  tabs: Tab[],
};

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const [selectedTab, setSelectedTab] = useState<string | undefined>('');

  return (
    <div className="tabs">
      <div className="tabs__links">
        <ul className="tabs__links-list">
          {tabs.map(tab => (
            <li
              key={tab.id}
              className="tabs__item"
            >
              <Link
                to={`/tabs/${tab.id}`}
                className={classNames('tabs__item-link', { 'tabs__item-link--active': selectedTab === tab.id })}
              >
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="tabs__content">
        {!selectedTab && <p className="tabs__content-notification">Please select a TAB</p>}

        <Routes>
          <Route
            path=":tabId"
            element={<TabContent tabs={tabs} onSelect={setSelectedTab} />}
          />
        </Routes>

      </div>
    </div>

  );
};
