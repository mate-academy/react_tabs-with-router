import ReactDOM from 'react-dom';
import {
  HashRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { App } from './App';
import { Tabs } from './components/Tabs';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<h1 className="title">Home page</h1>} />
        <Route path="home" element={<Navigate to="/" replace />} />

        <Route path="tabs" element={<Tabs tabs={tabs} />}>
          <Route index />
          <Route path=":selectTab" />
        </Route>

        <Route path="*" element={<h1 className="title">Page not found</h1>} />

      </Route>
    </Routes>

  </HashRouter>,
  document.getElementById('root'),
);
