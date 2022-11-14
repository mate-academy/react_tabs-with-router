import { FC, memo } from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { tabs } from '../../../utils/App.Constants';

type Props = {
  tabId: string;
};

export const Tabs: FC<Props> = memo(({ tabId }) => {
  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(({ id, title }) => {
          const isActive = tabId === id;

          return (
            <li
              data-cy="Tab"
              className={classNames({
                'is-active': isActive,
              })}
            >
              <NavLink to={`/tabs/${id}`}>
                {title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
});
