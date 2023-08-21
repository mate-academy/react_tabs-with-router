import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import { Navigate, Route, Routes } from 'react-router-dom';
import { Navigation } from './Components/Navigation';
import { HomePage } from './Pages/Home';
import { TabsPage } from './Pages/Tabs';
import { NotFound } from './Pages/PageNotFound';

export const App = () => {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="tabs">
          <Route index element={<TabsPage />} />
          <Route path=":tabsId" element={<TabsPage />} />
        </Route>

        <Route path="*" element={<NotFound />} />

        <Route path="/home" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
