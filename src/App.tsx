import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Home } from './components/Home';
import { Tabs } from './components/Tabs';
import { ErrorPage } from './components/ErrorPage';

// const tabs = [
//   { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
//   { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
//   { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
// ];

export const App = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <Navigation />
    <div className="section">
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route path="/tabs" element={<Tabs />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>

        <div className="tabs is-boxed">
          <ul>
            <li data-cy="Tab" className="is-active">
              <a href="#/">Tab 1</a>
            </li>
            <li data-cy="Tab">
              <a href="#/">Tab 2</a>
            </li>
            <li data-cy="Tab">
              <a href="#/">Tab 3</a>
            </li>
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      </div>
    </div>
  </>
);
