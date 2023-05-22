import classNames from 'classnames';
import { Link } from 'react-router-dom';

interface Props {
  id: string;
  title: string;
  selectedTabId: string;
}

export const TabItem: React.FC<Props> = ({ id, title, selectedTabId }) => {
  return (
    <li
      data-cy="Tab"
      className={classNames({ 'is-active': id === selectedTabId })}
    >
      <Link to={`/tabs/${id}`}>{title}</Link>
    </li>
  );
};
