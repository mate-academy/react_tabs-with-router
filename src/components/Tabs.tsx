import React from 'react';
import classNames from 'classnames';
import { Link, Outlet, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[],
};

export const Tabs: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();
  const foundTab = tabs.find(tab => tab.id === tabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const { id, title } = tab;

            return (
              <li
                className={classNames({
                  'is-active': tabId === id,
                })}
                data-cy="Tab"
                key={id}
              >
                <Link to={`/tabs/${id}`}>
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>

      </div>
      <div className="block" data-cy="TabContent">
        {foundTab?.content || 'Please select a tab'}
      </div>

      <Outlet />
    </div>
  );
};
