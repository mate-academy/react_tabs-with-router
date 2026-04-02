import classNames from 'classnames';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { TabsProp } from '../types/Tab';

export const Tabs: React.FC<TabsProp> = ({ tabs }) => {
  const { tabId } = useParams();
  const tabSelected = tabs.find(t => t.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(t => (
            <li
              data-cy="Tab"
              className={classNames({ 'is-active': tabId === t.id })}
              key={t.id}
            >
              <Link to={`/tabs/${t.id}`}>{t.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {tabSelected ? tabSelected.content : 'Please select a tab'}
      </div>
    </>
  );
};
