import { FC } from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { tabs } from '../../data/tabs';

type Props = {
  selectedId: string
};

export const NavigationTab: FC<Props> = ({ selectedId }) => {
  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            key={tab.id}
            data-cy="Tab"
            className={classNames({ 'is-active': selectedId === tab.id })}
          >
            <NavLink
              to={`../${tab.id}`}
              className={({ isActive }) => (
                classNames({ 'is-active': isActive })
              )}
            >
              {tab.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
