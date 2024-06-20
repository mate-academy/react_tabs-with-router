import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Navigation } from './components/Navigation/Navigation';
import { Outlet, Navigate, useLocation } from 'react-router-dom'


// const tabs = [
//   { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
//   { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
//   { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
// ];

export const App = () => {
  const detect = useLocation().pathname;

  if (detect === '/home') {
    return <Navigate to='/' />;
  };

  return (
    <>
      {/* Also requires <html class="has-navbar-fixed-top"> */}

      <Navigation />

      <div className="section">
        <div className="container">
          <Outlet />
        </div>
      </div>
    </>
  );
};
