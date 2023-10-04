import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[]
};

export const Tabs:React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams<string>();
  const selectedTab: Tab | undefined = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (

            <li
              data-cy="Tab"
              className={tab.id === tabId ? 'is-active' : ''}
              key={tab.id}
            >
              <NavLink to={`/tabs/${tab.id}`}>{tab.title}</NavLink>
            </li>

          ))}

        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab ? selectedTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
