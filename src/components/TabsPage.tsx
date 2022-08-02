import classNames from 'classnames';
import { NavLink, Outlet, useParams } from 'react-router-dom';

type Props = {
  tabs: Tab[];
};

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="tab"
              key={tab.id}
              className={classNames(
                { 'is-active': tab.id === tabId },
              )}
            >
              <NavLink
                to={tab.id}
              >
                {tab.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <Outlet />
    </>
  );
};
