import { NavLink, useParams } from 'react-router-dom';
import cn from 'classnames';

import { LOW_LEVEL_NAV_CONFIG } from '../utils/config';
import { useMemo } from 'react';

export const TabsPage = () => {
  const params = useParams<{ tabId: string }>();

  const config = useMemo(
    () => LOW_LEVEL_NAV_CONFIG.find(({ key }) => key === params.tabId),
    [params.tabId],
  );

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {LOW_LEVEL_NAV_CONFIG.map(({ key, to, title }) => {
            const isActive = params.tabId === key;

            return (
              <li
                data-cy="Tab"
                key={key}
                className={cn({
                  'is-active': isActive,
                })}
              >
                <NavLink to={to}>{title}</NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {config ? config.content : 'Please select a tab'}
      </div>
    </>
  );
};
