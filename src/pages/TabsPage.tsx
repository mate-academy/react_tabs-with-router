import { Link, Outlet, useParams } from 'react-router-dom';
import { tabs } from '../types/Tabs';
import classNames from 'classnames';

export const TabsPage = () => {
  const { tabId } = useParams();

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>

        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                key={tab.id}
                data-cy="Tab"
                className={classNames({ 'is-active': tab.id === tabId })}
              >
                <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <Outlet />
      </div>
    </div>
  );
};
