import { Link, Outlet, useParams } from 'react-router-dom';
import classNames from 'classnames';
import { tabs } from '../../api/tabs';

export const TabsPage: React.FC = () => {
  const { tabsId } = useParams();

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>

          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={classNames({ 'is-active': tab.id === tabsId })}
            >
              <Link to={`${tab.id}`}>{tab.title}</Link>
            </li>
          ))}

        </ul>
      </div>
      <Outlet />
    </>
  );
};
