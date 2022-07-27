import React from 'react';
import { NavLink, useParams } from 'react-router-dom';

type Props = {
  tabs: Tab[];
};

const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams<{ tabId: string }>();
  const selectedTabContent = tabs.find(tab => tab.id === tabId)?.content;

  return (
    <>
      <div className="w-50 mx-auto">
        <ul className="nav nav-tabs mb-3">
          {tabs.map(tab => (
            <li key={tab.id} className="nav-item">
              <NavLink className="nav-link" to={`/tabs/${tab.id}`}>
                {tab.title}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="tab-content">
          {selectedTabContent === undefined
            ? (
              <p>Please, select a tab</p>
            )
            : (
              <p>{tabs.find(tab => tab.id === tabId)?.content}</p>
            )}
        </div>
      </div>
    </>
  );
};

export default TabsPage;
