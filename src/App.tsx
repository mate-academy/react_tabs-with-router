import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { NavLink, Outlet } from 'react-router-dom';
import cn from 'classnames';

const handleLinkClass = ({ isActive }: { isActive: boolean }) =>
  cn('navbar-item', { 'is-active': isActive });

export const App = () => {
  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink to="/" className={handleLinkClass}>
              Home
            </NavLink>

            <NavLink to="/tabs" className={handleLinkClass}>
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>

      <div className="section">
        <Outlet />
      </div>
    </>
  );
};

// import 'bulma/css/bulma.css';
// import '@fortawesome/fontawesome-free/css/all.css';
// import './App.scss';
// import { Link, Outlet, useLocation } from 'react-router-dom';
// import cn from 'classnames';

// export const App = () => {
//   const location = useLocation();

//   const isHome = location.pathname === '/';
//   const isTabs = location.pathname.startsWith('/tabs');

//   return (
//     <>
//       <nav
//         className="navbar is-light is-fixed-top is-mobile has-shadow"
//         data-cy="Nav"
//       >
//         <div className="container">
//           <div className="navbar-brand">
//             <Link to="/" className={cn('navbar-item', { 'is-active': isHome })}>
//               Home
//             </Link>

//             <Link
//               to="/tabs"
//               className={cn('navbar-item', { 'is-active': isTabs })}
//             >
//               Tabs
//             </Link>
//           </div>
//         </div>
//       </nav>

//       <div className="section">
//         <Outlet />
//       </div>
//     </>
//   );
// };

// // Ограничение на не использовать NavLink было только для вкладок (Tabs), где is-active добавляется к <li>.
