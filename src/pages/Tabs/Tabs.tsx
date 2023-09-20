import { NavLink, Outlet, useMatch } from 'react-router-dom';
import { tabs } from '../../App';

const isActive = (tabId: string) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const match = useMatch(`/tabs/${tabId}`);

  return match ? 'is-active' : '';
};

export const Tabs = () => {
  return (
    <div>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              className={isActive(tab.id)}
            >
              <NavLink
                key={tab.id}
                to={`/tabs/${tab.id}`}
              >
                {tab.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        Please select a tab
      </div>

      <Outlet />
    </div>
  );
};
