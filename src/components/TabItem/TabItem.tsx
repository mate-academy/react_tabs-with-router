import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Tab } from '../../types/Tab';

type Props = {
  tab: Tab,
  tabId: string | undefined,
};

export const TabItem: React.FC<Props> = ({
  tab,
  tabId,
}) => {
  return (
    <li
      data-cy="Tab"
      className={classNames({ 'is-active': tab.id === tabId })}
    >
      <Link to={`/tabs/${tab.id}`}>
        {tab.title}
      </Link>
    </li>
  );
};
