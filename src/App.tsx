import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Routes, Route, Navigate, NavLink } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { TabsPage } from './components/TabsPage/TabsPage';



export const App = () => {
  return (
    <>
     <nav
      className="navbar is-light is-mobile has-shadow has-navbar-fixed-top"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink to="/" className={({isActive}) => (`navbar-item ${isActive? 'is-active': ''}`)}>
            Home
          </NavLink>
          <NavLink to="/tabs" className={({isActive}) => (`navbar-item ${isActive? 'is-active': ''}`)}>
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>
     <div className="section">
      <div className="container">
    <Routes>
      <Route path='/' element={<Home /> }></Route>
      <Route path="/home" element={<Navigate to="/" replace />} />
      <Route path='tabs'>
          <Route index element={<TabsPage />}></Route>
          <Route path=":tabId" element={<TabsPage />}></Route>
      </Route>
      <Route path='*' element={<h1 className="title">Page not found</h1>}></Route>

    </Routes>
    </div>
    </div>
  </>
  )

};
