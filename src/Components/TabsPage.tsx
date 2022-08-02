import {
  NavLink, useParams,
} from 'react-router-dom';
import { tabs } from '../tabs';

export const TabsPage = () => {
  const { tabId } = useParams();

  const currentTab = tabs.find(curTab => curTab.id === tabId);

  return (
    <div>
      <h1 className="title has-text-centered">Tabs page</h1>
      <ul className="tabs is-justify-content-start">
        {tabs.map(tab => (
          <li key={tab.id}>
            <NavLink
              to={`/tabs/${tab.id}`}
              className={({ isActive }) => (
                (isActive && 'button is-info') || 'button is-white'
              )}
            >
              {tab.title}
            </NavLink>
          </li>
        ))}
      </ul>
      <h1 className="title">
        {currentTab ? `${currentTab.content}` : 'Please select a tab'}
      </h1>
    </div>
  );
};
