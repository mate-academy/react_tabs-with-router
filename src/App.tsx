import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import { TabsPage } from './components/tabs';
import { Main } from './components/main';
import { tabsList } from './tabsContent';
import { Tab } from './components/tab';
import { Home } from './components/Home';

export const App = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Navigate to="/" />} />
        <Route path="tabs/:id?" element={<TabsPage />}>
          {/* <Route index element={<Tab content="Please select a tab" />} /> */}
          {tabsList.map(elem => (
            <Route
              path={`${elem.id}`}
              element={<Tab key={elem.id} content={elem.content} />}
            />
          ))}
        </Route>
        <Route path="*" element={<h1 className="title">Page not found</h1>} />
      </Route>
    </Routes>
  </>
);
