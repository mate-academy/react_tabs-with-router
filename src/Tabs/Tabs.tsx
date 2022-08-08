import React from 'react';
import classNames from 'classnames';
import { NavLink, useParams } from 'react-router-dom';

type Props = {
  tabs: Tab[],
};

export const Tabs: React.FC<Props> = ({
  tabs,
}) => {
  const { tabId } = useParams();
  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <div>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="tab"
              key={tab.id}
              className={classNames({ 'is-active': tab.id === tabId })}
            >
              <NavLink
                to={`/tabs/${tab.id}`}
              >
                {tab.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="tab-content">
        {selectedTab?.content || 'Please select a tab'}
      </div>
    </div>
  );
};
