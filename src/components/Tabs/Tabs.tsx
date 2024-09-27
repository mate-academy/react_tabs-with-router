import React from 'react';
import { Tab } from '../../types/Tab';
import { NavLink, useParams } from 'react-router-dom';
import classNames from 'classnames';

type Props = {
  tabs: Tab[];
};

export const Tabs: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();
  const currentTub = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={classNames({ 'is-active': tabId === tab.id })}
            >
              <NavLink to={`../${tab.id}`} relative="route">
                {tab.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {currentTub?.content || 'Please select a tab'}
      </div>
    </>
  );
};
