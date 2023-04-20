import { Link } from 'react-router-dom';
import classNames from 'classnames';

interface Props {
  id: string;
  title: string;
  isSelected: boolean;
}

export const TabItem: React.FC<Props> = ({ id, title, isSelected }) => {
  return (
    <li
      data-cy="Tab"
      className={classNames({
        'is-active': isSelected,
      })}
    >
      <Link to={`/tabs/${id}`}>{title}</Link>
    </li>
  );
};
