import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Tabs } from './components/Tabs';

export const App = () => (
  <>
    <Navigation />

    <Routes>
      <Route path="/" element={<h1 className="title">Home page</h1>} />
      <Route path="tabs">
        <Route
          index
          element={(
            <Tabs />
          )}
        />
        <Route
          path=":tabId/*"
          element={(
            <Tabs />
          )}
        />
      </Route>
      <Route path="*" element={<h1 className="title">Page not found</h1>} />
    </Routes>
  </>
);
