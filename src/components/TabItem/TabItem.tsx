import { Link } from 'react-router-dom';
import cn from 'classnames';

type Props = {
  id: string;
  title: string;
  isActive: boolean;
};

export const TabItem = ({ id, title, isActive }: Props) => {
  return (
    <li data-cy="Tab" className={cn({ 'is-active': isActive })}>
      <Link to={`/tabs/${id}`}>{title}</Link>
    </li>
  );
};
