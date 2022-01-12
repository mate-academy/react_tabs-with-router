import { Route, Routes } from 'react-router-dom';
import { Nav } from './components/Nav';
import { HomePage } from './components/HomePage';
import { TabsPage } from './components/TabsPage';
import { TabDetailsPage } from './components/TabDetailsPage';

const App = () => (
  <div className="App">
    <Nav />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tabs" element={<TabsPage />}>
        <Route path=":tabId" element={<TabDetailsPage />} />
      </Route>
      <Route
        path="*"
        element={(
          <h1>Page not found</h1>
        )}
      />
    </Routes>
  </div>
);

export default App;
