import React from 'react';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Tab } from '../helpers/interface';

type TabsPageProps = {
  tabs: Tab[];
};

const TabsPage: React.FC<TabsPageProps> = ({ tabs }) => {
  const { tabId } = useParams<{ tabId: string }>();
  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h2 className='title'>
        Tabs Page
      </h2>
      <ul className="tab__list">
        {tabs.map(tab => (
          <li
            key={tab.id}
            className="tab__item"
          >
            <NavLink
              to={`/tabs/${tab.id}`}
              className="tab__link"
              activeClassName="tab__link-active"
            >
              {tab.title}
            </NavLink>
          </li>
        ))}
      </ul>
      <p className="tab__content">
        {selectedTab?.content || "Please, select a tab!"}
      </p>
    </>
  );
};

export default TabsPage;
