import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { Link, Route, Routes } from 'react-router-dom';

// const tabs = [
//   { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
//   { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
//   { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
// ];

const App = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <nav className="navbar is-fixed-top has-background-light" data-cy="nav">
      <div className="navbar-menu">
        <div className="navbar-start">
          <Link to="/" className="navbar-item isActive">Home</Link>
          <Link to="/tabs" className="navbar-item isActive">Tabs</Link>
        </div>
      </div>
    </nav>

    <div className="section">

      <Routes>
        <Route path="/" element={<h1 className="title">Home page</h1>} />
        <Route path="/tabs" element={<h1 className="title">Tabs page</h1>} />
        <Route path="*" element={<h1 className="title">Page not found</h1>} />
      </Routes>

      <div className="tabs is-boxed">
        <ul>
          <li data-cy="tab" className="is-active">
            <a href="#/">Tab 1</a>
          </li>
          <li data-cy="tab">
            <a href="#/">Tab 2</a>
          </li>
          <li data-cy="tab">
            <a href="#/">Tab 3</a>
          </li>
        </ul>
      </div>

      <div className="block" data-cy="tab-content">
        Please select a tab
      </div>
    </div>
  </>
);

export default App;
