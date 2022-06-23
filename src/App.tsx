import './App.scss';

import {
  Routes, Route, Navigate, NavLink, useParams,
} from 'react-router-dom';
import { Header } from './components/Header';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const TabsPage: React.FC = () => {
  const { tabId } = useParams<{ tabId: string }>();

  return (
    <div className="tabs">
      <ul>
        {tabs.map(tab => (
          <li key={tab.id}>
            <NavLink
              to={`/tabs/${tab.id}`}
              style={
                ({ isActive }) => (isActive ? { color: 'black' }
                  : { color: 'gray' })
              }
            >
              {tab.title}
            </NavLink>
          </li>
        ))}
      </ul>
      {tabId && (
        tabs.find(tab => tab.id === tabId)?.content
      )}
    </div>
  );
};

const App = () => (
  <div className="App">
    <Header />

    <Routes>
      <Route path="/home" element={<h1>Home</h1>} />
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/tabs" element={<TabsPage />} />
      <Route path="/tabs/:tabId" element={<TabsPage />} />
    </Routes>
  </div>
);

export default App;
