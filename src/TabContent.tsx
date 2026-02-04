import { Link, Outlet, useParams } from 'react-router-dom';
import { Tab } from './types/Tab';
import cn from 'classnames';

interface Props {
  tabs: Tab[];
}

export const TabContent: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();
  const selectedTabId = tabId;

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={cn({ 'is-active': selectedTabId === tab.id })}
            >
              <Link to={tab.id}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <Outlet />
    </>
  );
};
