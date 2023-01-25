import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Outlet } from 'react-router-dom';
import { Navbar } from './components/NavBar';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => (
  <>
    <Navbar
      navItems={[
        { link: '/', name: 'Home' },
        { link: '/tabs', name: 'Tabs' },
      ]}
    />

    <Outlet context={tabs} />
  </>
);
