import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

type Props = {
  title: string,
  id: string,
  selectedTabId: string | undefined
};

export const Tab: React.FC<Props> = (
  {
    title,
    id,
    selectedTabId,
  },
) => {
  return (
    <li
      data-cy="Tab"
      className={classNames({ 'is-active': id === selectedTabId })}
    >
      <NavLink to={`/tabs/${id}`}>{title}</NavLink>
    </li>
  );
};
