// import 'bulma/css/bulma.css';
// import '@fortawesome/fontawesome-free/css/all.css';
// import './App.scss';

// // const tabs = [
// //   { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
// //   { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
// //   { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
// // ];

// export const App = () => (
//   <>
//     {/* Also requires <html class="has-navbar-fixed-top"> */}
//     <nav
//       className="navbar is-light is-fixed-top is-mobile has-shadow"
//       data-cy="Nav"
//     >
//       <div className="container">
//         <div className="navbar-brand">
//           <a href="/" className="navbar-item is-active">
//             Home
//           </a>
//           <a href="/tabs" className="navbar-item">
//             Tabs
//           </a>
//         </div>
//       </div>
//     </nav>

//     <div className="section">
//       <div className="container">
//         <h1 className="title">Home page</h1>
//         <h1 className="title">Tabs page</h1>
//         <h1 className="title">Page not found</h1>

//         <div className="tabs is-boxed">
//           <ul>
//             <li data-cy="Tab" className="is-active">
//               <a href="#/">Tab 1</a>
//             </li>
//             <li data-cy="Tab">
//               <a href="#/">Tab 2</a>
//             </li>
//             <li data-cy="Tab">
//               <a href="#/">Tab 3</a>
//             </li>
//           </ul>
//         </div>

//         <div className="block" data-cy="TabContent">
//           Please select a tab
//         </div>
//       </div>
//     </div>
//   </>
// );

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { TabsPage } from './components/TabsPage';
import { Navigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

export const App: React.FC = () => {
  const getLinkClass = ({ isActive }: { isActive: boolean }) =>
    classNames('navbar-item', { 'is-active': isActive });

  const location = useLocation();

  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink to="/" className={getLinkClass}>
              Home
            </NavLink>
            <NavLink
              to="/tabs"
              className={classNames('navbar-item', {
                'is-active': location.pathname.startsWith('/tabs'),
              })}
            >
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>
      <div className="section">
        <div className="container">
          <Routes>
            <Route path="/" element={<h1 className="title">Home page</h1>} />
            <Route path="/home" element={<Navigate to="/" />} />
            <Route path="tabs">
              <Route index element={<TabsPage />} />
              <Route path=":tabId" element={<TabsPage />} />
            </Route>
            <Route
              path="*"
              element={<h1 className="title">Page not found</h1>}
            />
          </Routes>
        </div>
      </div>
    </>
  );
};
