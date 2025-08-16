import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Navbar from './components/NavBar/Navbar';
import BasicRoutes from './components/BasicRoutes';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  return (
    <>
      {/* Also requires <html class="has-navbar-fixed-top"> */}
      <Navbar />

      <div className="section">
        <div className="container">
          <BasicRoutes tabs={tabs} />
        </div>
      </div>
    </>
  );
};
