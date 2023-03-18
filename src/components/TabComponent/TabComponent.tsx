import { Link } from 'react-router-dom';
import classNames from 'classnames';

type Props = {
  title: string;
  id: string;
  isActive: boolean;
};

export const TabComponent: React.FC<Props> = ({
  title,
  id,
  isActive,
}) => (
  <li className={classNames({ 'is-active': isActive })} data-cy="Tab">
    <Link to={`../${id}`} data-cy="TabLink">
      {title}
    </Link>
  </li>
);
