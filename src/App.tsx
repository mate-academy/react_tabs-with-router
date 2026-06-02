import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
  useParams,
  useLocation,
} from 'react-router-dom';

type Tab = {
  id: string;
  title: string;
  content: string;
};

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

// Компонент Tabs
const Tabs: React.FC<{ activeTabId?: string }> = ({ activeTabId }) => (
  <ul>
    {tabs.map(tab => (
      <li key={tab.id} data-cy="Tab">
        <Link
          to={`/tabs/${tab.id}`}
          className={activeTabId === tab.id ? 'is-active' : ''}
        >
          {tab.title}
        </Link>
      </li>
    ))}
  </ul>
);

// Home сторінка
const HomePage: React.FC = () => <h1 className="title">Home page</h1>;

// Tabs сторінка
const TabsPage: React.FC = () => {
  const { tabId } = useParams();
  const activeTab = tabs.find(tab => tab.id === tabId);

  return (
    <div>
      <h1 className="title">Tabs page</h1>
      <Tabs activeTabId={tabId} />
      <div data-cy="TabContent">
        {activeTab ? activeTab.content : 'Please select a tab'}
      </div>
    </div>
  );
};

// NotFound сторінка
const NotFoundPage: React.FC = () => <h1 className="title">Page not found</h1>;

// Головний App
export const App: React.FC = () => {
  const location = useLocation();

  return (
    <div>
      <nav data-cy="Nav">
        <ul>
          <li>
            <Link
              to="/"
              className={location.pathname === '/' ? 'is-active' : ''}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/tabs"
              className={location.pathname.startsWith('/tabs') ? 'is-active' : ''}
            >
              Tabs
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="tabs">
          <Route index element={<TabsPage />} />
          <Route path=":tabId" element={<TabsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

// Обгортка з BrowserRouter
export default function RootApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
