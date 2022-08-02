import './App.scss';
import { NavLink, Route, Routes } from 'react-router-dom';
import TabsPage from './components/TabsPage';
import { Tab } from './react-app-env';
import HomePage from './components/HomePage';
import 'bulma/bulma.sass';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => (
  <div className="App container is-widescreen">
    <header className="header">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/tabs">Tabs</NavLink>
      </nav>
    </header>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="tabs" element={<TabsPage tabs={tabs} />}>
        <Route path=":tabId" element={<TabsPage tabs={tabs} />} />
      </Route>
      <Route path="*" element={<HomePage />} />
    </Routes>
  </div>
);

export default App;
