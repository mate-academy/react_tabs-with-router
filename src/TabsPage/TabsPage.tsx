import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import './TabsPage.scss';

interface Tabs {
  id: string,
  title: string,
  content: string,
}

interface Props {
  tabs: Tabs[],
}

const TabsPage:React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams<{ tabId: string }>();
  const selectedTab = tabs.find(tab => tab.id === tabId);

  const isFind = selectedTab ? 'Tabs Page' : 'Please chuse tab';

  return (
    <div className="TabsPage">
      <h2 className="TabsPage__title">{isFind}</h2>

      <ul className="TabsPage__links">
        {tabs.map(tab => {
          return (
            <li className="TabsPage__link" key={tab.id}>
              <NavLink
                className="TabsPage__btn"
                to={`/tabs/${tab.id}`}
              >
                {tab.title}
              </NavLink>
            </li>
          );
        })}
      </ul>

      {selectedTab && (
        <p className="TabsPage__text">{selectedTab.content}</p>
      )}
    </div>
  );
};

export default TabsPage;
