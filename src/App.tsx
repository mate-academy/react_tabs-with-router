import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import Home from './components/Home';
import Tabs from './components/Tabs';
import { Navigate, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import NotFound from './components/NotFound';

export const App = () => (
  <>
    <Nav />
    <div className="section">
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Navigate to="/" />} />
          <Route path="tabs/*" element={<Tabs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  </>
);
