import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Outlet } from 'react-router-dom';
import { PageNavigation } from './components/PageNavigation';

export const App = () => (
  <>
    <PageNavigation />

    <Outlet />
  </>
);
