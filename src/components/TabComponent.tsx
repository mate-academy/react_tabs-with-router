import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';
import { Tab } from '../types/Tab';

type Props = {
  tab: Tab,
  toLink: string,
};

export const TabComponent: React.FC<Props> = ({ tab, toLink }) => {
  const { tabId } = useParams<{ tabId: string }>();
  const isActive = tabId === tab.id;

  return (
    <li
      data-cy="Tab"
      className={classNames({ 'is-active': isActive })}
    >
      <Link to={toLink}>{tab.title}</Link>
    </li>
  );
};
