import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Header } from './component/Header';
import { Outlet } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Header />
      <div className="section">
        <div className="container">
          <Outlet />
        </div>
      </div>
    </>
  );
};
