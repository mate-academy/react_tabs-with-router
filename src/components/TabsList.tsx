import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import { Tab } from '../types/Tab';

type Props = {
  tabsList: Tab[],
  activeId: string,
};

export const TabsList: React.FC<Props> = ({ tabsList, activeId }) => {
  const isActive = (id: string) => id === activeId;

  return (
    <div className="tabs is-boxed">
      <ul>
        {tabsList.map(tab => {
          const { title, id } = tab;

          return (
            <li
              data-cy="Tab"
              className={classNames({ 'is-active': isActive(id) })}
            >
              <Link to={`/tabs/${id}`}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
