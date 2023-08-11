import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import { Navigate, Route, Routes } from 'react-router-dom';

import { Home } from './Home';
import { Error } from './Error';
import { NavPage } from './Nav';
import { TabPage } from './Tab';

export const App = () => (
  <>
    <NavPage />

    <Routes>
      <Route path='/' element={<Home />} />
        <Route path='tabs'>
          <Route index element={<TabPage />} />
          <Route path=':tabId' element={<TabPage />} />
        </Route>

        <Route path='*' element={<Error />} />
        <Route path='/home' element={<Navigate to='/' />} />
    </Routes>
  </>
);
