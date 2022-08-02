import classNames from 'classnames';
import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { Tab } from '../Type/Tabs';

type Props = {
  tabs: Tab[];
};

export const PageTabs: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams<{ tabId: string }>();
  const selectTab = tabs.find(tab => tab.id === tabId);

  return (
    <div className="section">
      <p className="nav__text">Tabs Page</p>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={classNames({
                'is-active': tab.id === selectTab?.id,
              })}
            >
              <NavLink to={`/tabs/${tab.id}`}>
                {tab.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="block">
        {(selectTab === undefined) ? (
          <p>Please select a tab</p>
        ) : (
          <p>{selectTab.content}</p>
        )}
      </div>
    </div>
  );
};
