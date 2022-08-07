import { Outlet, NavLink } from 'react-router-dom';

export const Tabs = () => {
  const createClassName = ({ isActive }: { isActive: boolean }) => {
    const createdClass = 'nav-link';

    if (isActive) {
      return `${createdClass} active`;
    }

    return createdClass;
  };

  return (
    <>
      <h1>Tabs Page</h1>
      <div className="tabs is-boxed">
        <ul className="nav nav-tabs">
          <li>
            <NavLink
              to="tab-1"
              className={createClassName}
            >
              Tab 1
            </NavLink>
          </li>
          <li>
            <NavLink
              className={createClassName}
              to="tab-2"
            >
              Tab 2
            </NavLink>
          </li>
          <li>
            <NavLink
              className={createClassName}
              to="tab-3"
            >
              Tab 3
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};
