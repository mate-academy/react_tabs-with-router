import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
  Navigate,
  useLocation,
} from 'react-router-dom';

function Navigation() {
  const location = useLocation();

  return (
    <nav>
      <ul>
        <li className={location.pathname === '/' ? 'is-active' : ''}>
          <Link to="/">Home</Link>
        </li>
        <li
          className={location.pathname.startsWith('/tabs') ? 'is-active' : ''}
        >
          <Link to="/tabs">Tabs</Link>
        </li>
      </ul>
      <hr />
    </nav>
  );
}

function HomePage() {
  return <h1>Home page</h1>;
}

const tabs = [
  { id: 'tab1', title: 'Tab 1', content: 'Content for Tab 1' },
  { id: 'tab2', title: 'Tab 2', content: 'Content for Tab 2' },
  { id: 'tab3', title: 'Tab 3', content: 'Content for Tab 3' },
];

function TabsPage() {
  const { tabId } = useParams();

  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <div>
      <h1>Tabs page</h1>
      <div className="tabs">
        {tabs.map(tab => (
          <Link
            key={tab.id}
            to={`/tabs/${tab.id}`}
            className={tab.id === tabId ? 'is-active' : ''}
            style={{ marginRight: 10 }}
          >
            {tab.title}
          </Link>
        ))}
      </div>
      <div style={{ marginTop: 20 }}>
        {tabId == null && <p>Please select a tab</p>}
        {tabId != null && !selectedTab && <p>Please select a tab</p>}
        {selectedTab && <div>{selectedTab.content}</div>}
      </div>
    </div>
  );
}

function NotFoundPage() {
  return <h1>Page not found</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="tabs">
          <Route index element={<TabsPage />} />
          <Route path=":tabId" element={<TabsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
