import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { Nav } from './components/Nav';
import { routesConfig } from './constants';

export const App = () => (
  <>
    <Nav />

    <Routes>
      {routesConfig.map(route => (
        <Route key={route.path} path={route.path} element={route.element}>
          {route.children?.map(child => (
            <Route
              key={child.path || 'index'}
              index={child.index}
              path={child.path}
              element={child.element}
            />
          ))}
        </Route>
      ))}
    </Routes>
  </>
);
