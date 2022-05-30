import './App.scss';
import {
  Route, Routes,
} from 'react-router-dom';
import { TabsPage } from './components/TabsPage';
import { Navigation } from './components/Navigation';

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
        element={(
          <div className="App__home">
            <h1>Home page</h1>
            <p className="App__text">
              Hello
            </p>
          </div>
        )}
      />

      <Route
        path="tabs"
        element={(
          <div className="App__tabs">
            <TabsPage
              tabs={tabs}
            />
          </div>
        )}
      />

      <Route
        path="tabs/:tabId"
        element={(
          <div className="App__tabs">
            <TabsPage
              tabs={tabs}
            />
          </div>
        )}
      />

      <Route
        path="*"
        element={(
          <p className="App__unknown">
            Page not found
          </p>
        )}
      />
    </Routes>
  </div>
);

export default App;
