import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Tab } from '../types/Tab';

type Props = {
  tab: Tab,
  selectedTabId: string,
};

export const TabLink:React.FC<Props> = ({ tab, selectedTabId }) => {
  const {
    id, title,
  } = tab;

  return (
    <li
      data-cy="Tab"
      className={classNames({
        'is-active': id === selectedTabId,
      })}
    >
      <Link to={`../${id}`}>{title}</Link>
    </li>
  );
};
