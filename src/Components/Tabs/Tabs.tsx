import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Tab } from '../../types/Tab';

type PropTypes = {
  tabs: Tab[],
  selectedTab: Tab | null,
};

export const Tabs: React.FC<PropTypes> = ({ tabs, selectedTab }) => {
  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => {
          const { title, id } = tab;
          const isSelected = tab === selectedTab;

          return (
            <li
              data-cy="Tab"
              key={id}
              className={classNames(
                { 'is-active': isSelected },
              )}
            >
              <Link
                to={`../${id}`}
              >
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
