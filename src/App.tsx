import { Outlet } from 'react-router-dom';
import { MainNav } from './components/MainNav';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

export const App: React.FC = () => {
  return (
    <>
      <MainNav />
      <div data-cy="app">
        <main className="section">
          <div className="container">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
};
