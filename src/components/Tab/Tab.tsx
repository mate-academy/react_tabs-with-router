import classNames from 'classnames';
import { FC, memo } from 'react';
import { NavLink } from 'react-router-dom';
import { Tab } from '../../types/interface';

interface Props {
  tab: Tab;
  tabID: string;
}

export const TabItem: FC<Props> = memo(({ tab, tabID }) => {
  const { id, title } = tab;

  return (
    <li
      className={classNames({
        'is-active': id === tabID,
      })}
      data-cy="Tab"
      key={id}
    >
      <NavLink
        to={`../${id}`}
        data-cy="TabLink"
      >
        {title}
      </NavLink>
    </li>
  );
});
