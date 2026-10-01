import { Link } from 'react-router-dom';
import cn from 'classnames';

type Props = {
  tab: {
    id: string;
    title: string;
    content: string;
  };
  isActive: boolean;
};

export const Tab = ({ tab, isActive }: Props) => {
  return (
    <li
      data-cy="Tab"
      className={cn({ 'is-active': isActive })}
    >
      <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
    </li>
  );
};
