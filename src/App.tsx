import { Outlet } from 'react-router-dom';
import { Navigation } from './components/Navigation';

export const App = () => (
  <>
    <Navigation />
    <Outlet />
  </>
);
