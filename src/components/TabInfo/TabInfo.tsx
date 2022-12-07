import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Tab } from '../../types/Tab';

type Props = {
  tab: Tab
  tabId: string
};

export const TabInfo: React.FC<Props> = ({
  tab,
  tabId,
}) => {
  const isSelected = tabId === tab.id;

  return (
    <>
      <li
        data-cy="Tab"
        className={classNames({ 'is-active': isSelected })}
      >
        <Link
          to={`/tabs/${tab.id}`}
        >
          {tab.title}
        </Link>
      </li>
    </>
  );
};
