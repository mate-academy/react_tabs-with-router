import classNames from 'classnames';
import { Link } from 'react-router-dom';

type Props = {
  tabId: string;
  selectedTabId: string | undefined;
  title: string;
};

export const SelectedTab: React.FC<Props> = ({
  tabId,
  selectedTabId,
  title,
}) => (
  <li
    key={tabId}
    className={classNames(
      { 'is-active': tabId === selectedTabId },
    )}
  >
    <Link
      to={`/tabs/${tabId}`}
      data-cy="Tab"
    >
      {title}
    </Link>
  </li>
);
