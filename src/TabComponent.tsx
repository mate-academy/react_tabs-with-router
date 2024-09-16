import React from 'react';
import { Tab } from './types/Tab';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';

type TabComponentProps = {
  tabs: Tab[];
};

export const TabComponent = ({ tabs }: TabComponentProps) => {
  const { tabId } = useParams();
  const currentTab = tabs.find(tab => tabId === tab.id);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const { id, title } = tab;

            return (
              <li
                key={id}
                data-cy="Tab"
                className={classNames({ 'is-active': tabId === id })}
              >
                <Link to={`${id}`} data-cy="TabLink">
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {currentTab ? currentTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
