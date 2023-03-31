import { FC } from 'react';
// import cn from 'classnames';
import {
  Route, Routes, Link, useMatch,
} from 'react-router-dom';

import cn from 'classnames';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const Tabs: FC = () => {
  const match = useMatch('/tabs/*');

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {
            tabs.map(({ id, title }) => (
              <li
                key={id}
                data-cy="Tab"
                // className="is-active"
                className={cn(
                  { 'is-active': `/tabs/${id}` === match?.pathname },
                )}
              >
                <Link
                  to={id}
                  className="navbar-item"
                // onClick={() => setSelectedTab(id)}
                >
                  {title}
                </Link>
                {/* <NavLink
                  to={id}
                  className={({ isActive }) => (
                    cn(
                      'navbar-item',
                      { 'is-active': isActive },
                    )
                  )}
                >
                  {title}
                </NavLink> */}
              </li>
            ))
          }
        </ul>
      </div>
      <Routes>
        {
          tabs.map(({ id, content }) => (
            <Route
              path={id}
              element={
                <div data-cy="TabContent" className="block">{content}</div>
              }
              key={id}
            />
          ))
        }
        <Route
          path="*"
          element={(
            <div data-cy="TabContent" className="block">
              Please select a tab
            </div>
          )}
        />
      </Routes>
    </>
  );
};
