import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { Tab } from '../../types/Tab';

type Props = {
  tab: Tab;
  selectedTabId: string;
};

export const TabItem: React.FC<Props> = ({
  tab,
  selectedTabId,
}) => {
  return (
    <li
      data-cy="Tab"
      className={classNames(
        { 'is-active': tab.id === selectedTabId },
      )}
    >
      <Link to={`../${tab.id}`}>
        {tab.title}
      </Link>
    </li>
  );
};
