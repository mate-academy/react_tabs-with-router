import './App.scss';
import { Routes, Route, Link } from 'react-router-dom';
import { Tabs } from './components/Tabs';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => (
  <div className="App">
    <nav className="nav">
      <Link className="nav__link" to="/">Home</Link>
      <Link className="nav__link" to="/tabs">Tabs</Link>
    </nav>

    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/tabs" element={<Tabs tabs={tabs} />} />
      <Route path="/tabs/:id" element={<Tabs tabs={tabs} />} />

      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
  </div>
);

export default App;
