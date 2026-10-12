import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Routes, Route, Link, Navigate, useLocation } from 'react-router-dom';
import { TabPages } from './Components/TabPages';

export const App = () => {
  const { pathname } = useLocation();

  const navLinks = ['Home', 'Tabs'];

  const isActive = (link: string) => {
    if (link === 'Home') {
      return pathname === '/';
    }

    if (link === 'Tabs') {
      return pathname.startsWith('/tabs');
    }

    return false;
  };

  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow "
        data-cy="Nav"
      >
        <div className="container ">
          <div className="navbar-brand">
            {navLinks.map(link => (
              <Link
                key={link}
                to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                className={`navbar-item ${isActive(link) ? 'is-active' : ''}`}
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <div className="section mt-6">
        <div className="container">
          <Routes>
            <Route path="/" element={<h1 className="title">Home page</h1>} />
            <Route path="/home" element={<Navigate to="/" />} />
            <Route path="tabs">
              <Route index element={<TabPages />} />
              <Route path=":tabId" element={<TabPages />} />
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

// <div className="container">
//   <div className="navbar-brand">
//     <a
//       href="/"
//       onClick={toggleActive}
//       className={`navbar-item ${!isActive ? 'is-active' : ''}`}
//     >
//       Home
//     </a>
//     <a
//       href="/tabs"
//       onClick={toggleActive}
//       className={`navbar-item ${isActive ? 'is-active' : ''}`}
//     >
//       Tabs
//     </a>
//   </div>
// </div>

// {/* <>
//   {/* Also requires <html class="has-navbar-fixed-top"> */}
//   <nav
//     className="navbar is-light is-fixed-top is-mobile has-shadow"
//     data-cy="Nav"
//   >
//     <div className="container">
//       <div className="navbar-brand">
//         <a href="/" className="navbar-item is-active">
//           Home
//         </a>
//         <a href="/tabs" className="navbar-item">
//           Tabs
//         </a>
//       </div>
//     </div>
//   </nav>

//   <div className="section">
//     <div className="container">
//       <h1 className="title">Home page</h1>
//       <h1 className="title">Tabs page</h1>
//       <h1 className="title">Page not found</h1>

// <div className="tabs is-boxed">
//   <ul>
//     <li data-cy="Tab" className="is-active">
//       <a href="#/">Tab 1</a>
//     </li>
//     <li data-cy="Tab">
//       <a href="#/">Tab 2</a>
//     </li>
//     <li data-cy="Tab">
//       <a href="#/">Tab 3</a>
//     </li>
//   </ul>
// </div>

//       <div className="block" data-cy="TabContent">
//         Please select a tab
//       </div>
//     </div>
//   </div>
// </>; */}
