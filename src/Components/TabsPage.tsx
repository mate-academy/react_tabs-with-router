import {
  Navigate,
  NavLink,
  Route,
  Routes,
} from 'react-router-dom';
import { TabInfo } from './TabInfo';
import { tabs } from '../tabs';

export const TabsPage = () => {
  return (
    <div>
      <h1 className="title has-text-centered">Tabs page</h1>
      <ul className="tabs is-justify-content-start">
        {tabs.map(tab => (
          <li key={tab.id}>
            <NavLink
              to={tab.id}
              className={({ isActive }) => (
                isActive
                  ? 'button is-info'
                  : ''
              )}
            >
              {tab.title}
            </NavLink>
          </li>
        ))}
      </ul>
      <Routes>
        <Route index element={<h1 className="title">Please select a tab</h1>} />
        <Route path=":tabId" element={<TabInfo tabs={tabs} />} />
        <Route path=":tabId/*" element={<Navigate to="/tabs" />} />
      </Routes>
    </div>
  );
};
