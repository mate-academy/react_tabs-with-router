import { FC } from 'react';
import {
  Route,
  Routes,
  Link,
  useParams,
} from 'react-router-dom';

import cn from 'classnames';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const Tabs: FC = () => {
  const tabId = useParams();

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
                className={cn(
                  { 'is-active': id === tabId['*'] },
                )}
              >
                <Link
                  to={id}
                  className="navbar-item"
                >
                  {title}
                </Link>
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
