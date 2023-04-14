import { Link } from 'react-router-dom';
import classNames from 'classnames';

type Props = {
  id: string;
  activeTabId?: string;
  title: string;
};

export const TabItem: React.FC<Props> = ({ id, activeTabId, title }) => (
  <li
    data-cy="Tab"
    className={classNames(
      { 'is-active': id === activeTabId },
    )}
  >
    <Link to={`../${id}`}>{title}</Link>
  </li>
);
