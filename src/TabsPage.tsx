import { Link, Outlet, useLocation } from 'react-router-dom';
import type { Tab } from './types/Tab';

type Props = {
  tabs: Tab[];
};

export const TabsPage = ({ tabs }: Props) => {
  const { pathname } = useLocation();

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={
                pathname === `/tabs/${tab.id}` ? 'is-active' : ''
              }
            >
              <Link to={`/tabs/${tab.id}`}>
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <Outlet />
    </>
  );
};
