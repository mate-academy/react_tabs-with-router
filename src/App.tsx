import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import classNames from 'classnames';
import { Outlet } from 'react-router-dom';
import { TopNav } from './components/TopNav';

const getLinkClass = (
  { isActive }: { isActive: boolean },
) => classNames('navbar-item', {
  'is-active': isActive,
});

export const App = () => (
  <>
    <TopNav
      getLinkClass={getLinkClass}
    />
    <div className="section">
      <div className="container">
        <Outlet />
      </div>
    </div>
  </>
);
