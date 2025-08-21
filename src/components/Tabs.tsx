import { Link, Route, Routes, useLocation } from 'react-router-dom';
import TabContent from './TabContent';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const Tabs: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            // We check if the current URL path ends with the tab's ID.
            // This is a simple way to check for the active tab in this case.
            const isActive = location.pathname.endsWith(tab.id);

            return (
              <li key={tab.id} className={isActive ? 'is-active' : ''}>
                <Link to={tab.id}>{tab.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      <Routes>
        <Route index element={<div className="block" data-cy="TabContent">Please select a tab</div>} />
        <Route path=":tabId" element={<TabContent tabs={tabs} />} />
      </Routes>
    </>
  );
};

export default Tabs;