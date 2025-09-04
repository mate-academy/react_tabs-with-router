import { Link, Outlet, useParams } from 'react-router-dom';
import cn from 'classnames';
import 'bulma/css/bulma.css';
import { tabs } from '../api/tabs';

export const Tabs = () => {
  const { tabId } = useParams();

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={cn({ 'is-active': tabId === tab.id })}
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
