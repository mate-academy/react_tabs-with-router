import React, { useMemo } from 'react';
import { NavLink, useParams } from 'react-router-dom';

interface Props {
  tabs: Tab[];
}

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams<TabParams>();
  const current = useMemo(() => tabs.find((tab) => tab.id === tabId), [tabId]);

  return (
    <div>
      <ul className="tabs">
        {tabs.map(({ id, title }, i, t) => (
          <li
            key={id}
          >
            <NavLink
              to={`/tabs/${id}`}
              className={({ isActive }) => (
                `tab ${isActive && 'active'}`
              )}
            >
              {title}
            </NavLink>
            {i !== t.length - 1 && '|'}
          </li>
        ))}
      </ul>

      <div className="current">
        {current
          ? <p>{current.content}</p>
          : <span>Please select tab</span>}
      </div>
    </div>
  );
};
