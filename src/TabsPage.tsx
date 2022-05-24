import React from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { Tab } from './type';

type Props = {
  tabs: Tab[];
};

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams<{ tabId: string }>();
  const findTab = tabs.find(tab => tab.id === tabId)?.content;

  return (
    <>
      <h1>TabsPage</h1>
      <ul>
        {tabs.map((tab) => (
          <li key={tab.id}>
            <NavLink
              to={`/tabs/${tab.id}`}
            >
              {tab.title}
            </NavLink>
          </li>
        ))}
      </ul>
      <div>
        {findTab
       || <span>Please select a tab</span>}
      </div>
    </>
  );
};
