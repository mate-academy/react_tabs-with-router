import classNames from 'classnames';
import { FC, memo } from 'react';
import { NavLink } from 'react-router-dom';
import { Tab } from '../../types/Tab';

interface Props {
  tab: Tab;
  tabId: string;
}

export const TabData: FC<Props> = memo(({ tab, tabId }) => (
  <li
    data-cy="Tab"
    className={classNames({
      'is-active': tab.id === tabId,
    })}
  >
    <NavLink
      to={`../${tab.id}`}
      data-cy="TabLink"
    >
      {tab.title}
    </NavLink>
  </li>
));
