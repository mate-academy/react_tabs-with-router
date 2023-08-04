import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Navigation } from './components/Nav';
import { HomePage } from './components/pagesRout/Home';
import { ErrorPage } from './components/pagesRout/NotFound';
import { TabsPage } from './components/pagesRout/Tabs';

export const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="tabs">
          <Route index element={<TabsPage />} />
          <Route path=":tabId" element={<TabsPage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/home" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
