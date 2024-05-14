import { useParams } from 'react-router-dom';
import classNames from 'classnames';
import { Tab } from '../types/Tab';
import React from 'react';

type Props = {
  tabs: Tab[];
};

export const Tabs: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();

  const selectTab = tabs.find((tab: Tab) => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab: Tab) => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={classNames({ 'is-active': tab.id === tabId })}
            >
              <a href={`#/tabs/${tab.id}`}>{tab.title}</a>
            </li>
          ))}
        </ul>
      </div>

      {
        <div className="block" data-cy="TabContent">
          {selectTab ? selectTab.content : 'Please select a tab'}
        </div>
      }
    </>
  );
};
