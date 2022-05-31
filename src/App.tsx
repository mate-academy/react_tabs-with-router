import './App.scss';
import {
  Route, Routes,
} from 'react-router-dom';
import { TabsPage } from './components/TabsPage';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { PageNotFound } from './components/PageNotFound';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => (
  <div className="App">
    <header className="App__header">
      <Navigation />
    </header>

    <Routes>
      <Route
        path="/"
        element={<HomePage />}
      />

      <Route
        path="tabs"
        element={(
          <TabsPage
            tabs={tabs}
          />
        )}
      />

      <Route
        path="tabs/:tabId"
        element={(
          <TabsPage
            tabs={tabs}
          />
        )}
      />

      <Route
        path="*"
        element={<PageNotFound />}
      />
    </Routes>
  </div>
);

export default App;
