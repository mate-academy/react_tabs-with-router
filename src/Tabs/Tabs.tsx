import React from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';
import classNames from 'classnames';

type Props = {
  tabs: Tab[];
};

export const Tabs: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={classNames({
                'is-active': tabId ? tabId === tab.id : false,
              })}
            >
              <Link to={`${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <Outlet />
    </>
  );
};
