import React from 'react';
import {
  Link,
  Outlet,
  useParams,
} from 'react-router-dom';

type Props = {
  tabs: Tab[],
};

export const TabsPage:React.FC<Props> = ({ tabs }) => {
  const { tabsId } = useParams<{ tabsId: string }>();

  return (
    <>
      <h1>Tabs page</h1>
      <ul>
        {
          tabs.map((tab) => {
            return (
              <li>
                <Link
                  className={tabsId === tab.id ? 'is-active' : ''}
                  key={tab.id}
                  to={tab.id}
                >
                  {tab.title}
                </Link>
              </li>
            );
          })
        }
      </ul>
      <Outlet />
    </>
  );
};
