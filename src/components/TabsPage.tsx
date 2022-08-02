import { NavLink, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[],
};

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();
  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <div>
        <h1 className="title">Tabs page</h1>
        <ul>
          {tabs.map(tab => (
            <li data-cy="tab">
              <NavLink
                to={tab.id}
                className={({ isActive }) => (
                  isActive ? 'isActive is-active' : ''
                )}
              >
                {tab.title}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="block content" data-cy="tab-content">
          {selectedTab ? selectedTab.content : 'Please select a tab'}
        </div>
      </div>
    </>
  );
};
