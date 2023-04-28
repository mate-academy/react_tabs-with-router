import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
  onSelectedTabId?: string
};

export const TabsLink: React.FC<Props> = ({ tabs, onSelectedTabId }) => {
  return (
    <ul>
      {tabs.map((tab) => {
        const {
          id,
          title,
        } = tab;

        return (
          <>
            <li
              data-cy="Tab"
              className={classNames({
                'is-active': onSelectedTabId === id,
              })}
              key={id}
            >
              <Link to={`/tabs/${id}`}>
                {title}
              </Link>
            </li>
          </>
        );
      })}

    </ul>
  );
};
