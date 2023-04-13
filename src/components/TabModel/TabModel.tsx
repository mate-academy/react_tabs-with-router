import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Tab } from '../../types/Tab';

interface Props {
  tab: Tab;
  tabId: string | undefined;
}

export const TabModel: React.FC<Props> = ({ tab, tabId }) => {
  const { id, title } = tab;

  return (
    <li
      data-cy="Tab"
      className={classNames({ 'is-active': tabId === tab.id })}
    >
      <Link to={`/tabs/${id}`}>{title}</Link>
    </li>
  );
};
