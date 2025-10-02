import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { tabs } from '../../utils/tabs';

export const Tabs: React.FC<{}> = () => {
  const params = useParams();

  const { tabId } = params;

  const tabFind = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                data-cy="Tab"
                key={tab.id}
                className={tab.id == tabFind?.id ? 'is-active' : ''}
              >
                <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {!tabId && 'Please select a tab'}

        {tabId && tabFind?.content}
      </div>
    </>
  );
};
