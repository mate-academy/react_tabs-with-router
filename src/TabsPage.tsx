import classNames from 'classnames';
import React from 'react';
import { NavLink, useParams } from 'react-router-dom';

type Props = {
  tabs: Tab[],
};

const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams<{ tabId: string }>();

  return (
    <div className="container">
      <ul>
        {tabs.map(tab => (
          <li
            key={tab.id}
            className={classNames('button is-primary', {
              'is-light': tab.id !== tabId,
            })}
          >
            <NavLink to={`/tabs/${tab.id}`}>
              {tab.title}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="box">
        {tabId === undefined
          ? (
            <p>Please, select a tab</p>
          )
          : (
            <p>{tabs.find(tab => tab.id === tabId)?.content}</p>
          )}
      </div>
    </div>
  );
};

export default TabsPage;
