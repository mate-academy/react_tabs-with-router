import { Outlet, useMatch } from 'react-router-dom';
import { Nav } from './components/Nav/Nav';
import { TabContent } from './components/TabContent/TabContent';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

export const App = () => {
  const matchHome = useMatch('/');

  return (
    <>
      <Nav />

      <div className="section">
        <div className="container">
          <Outlet />

          {!matchHome && <TabContent />}
        </div>
      </div>
    </>
  );
};
