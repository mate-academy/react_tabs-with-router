import React from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { Tabs } from '../types/tabs';

type Props = {
  tabs: Tabs[],
};

const TabsPage:React.FC<Props> = ({
  tabs,
}) => {
  const { tabId } = useParams<{ tabId: string }>();

  const content = tabs.find(tab => tab.id === tabId)?.content;

  return (
    <>
      <h1 className="title">TabsPage</h1>
      <ul className="tabs is-centered">
        {tabs.map((tab) => (
          <li key={tab.id}>
            <NavLink
              to={`/tabs/${tab.id}`}
              className={`navbar-item is-tab ${(tabId === tab.id) ? 'is-active' : ''}`}
            >
              {tab.title}
            </NavLink>
          </li>
        ))}
      </ul>
      <div>
        {content
         || <span className="tag is-danger">Please select a tab</span>}
      </div>
    </>

  );
};

export default TabsPage;
