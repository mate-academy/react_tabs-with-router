import { Link, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';
import classNames from 'classnames';

export const getLinkClass = ({ isActive }: { isActive: boolean }) => {
  return classNames('navbar-item', {
    'is-active': isActive,
  });
};

type Props = {
  tabItem: Tab;
};

export const TabItem: React.FC<Props> = ({ tabItem }) => {
  const { tabId } = useParams();

  return (
    <li
      key={tabItem.id}
      data-cy="Tab"
      className={classNames('', {
        'is-active': tabId === tabItem.id,
      })}
    >
      <Link to={`/tabs/${tabItem.id}`} data-cy="TabLink">
        {tabItem.title}
      </Link>
    </li>
  );
};
