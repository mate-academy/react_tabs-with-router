import { Route, Routes } from 'react-router-dom';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { TabsPage } from './components/TabsPage';
import { PageNotFound } from './components/PageNotFound';

export const App = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <Navbar />

    <div className="section">
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tabs">
            <Route index element={<TabsPage />} />
            <Route path=":tabId" element={<TabsPage />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
          <Route />
        </Routes>
      </div>
    </div>
  </>
);
