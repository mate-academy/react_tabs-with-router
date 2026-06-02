import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import {
  Routes,
  Route,
  Link,
  // NavLink,
  // Outlet,
  // useParams,
  // useNavigate,
  // Navigate,
  useLocation,
} from 'react-router-dom';
const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  const location = useLocation();
  const listaLocationHash = ['#/1', '#/2', '#/3'];
  const activeTab = tabs[listaLocationHash.indexOf(location.hash)];

  const Home = () => {
    return (
      <div className="section">
        <div className="container">
          <h1 className="title">Home page</h1>
        </div>
      </div>
    );
  };

  const Tabs = () => {
    return (
      <div className="section">
        <div className="container">
          <h1 className="title">Tabs page</h1>

          <div className="tabs is-boxed">
            <ul>
              {tabs.map((tab, index) => (
                <li
                  data-cy="Tab"
                  key={tab.id}
                  className={
                    listaLocationHash[index] === location.hash
                      ? 'is-active'
                      : ''
                  }
                >
                  <Link to={listaLocationHash[index]}>{tab.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="block" data-cy="TabContent">
            {!listaLocationHash.includes(location.hash)
              ? 'Please select a tab '
              : `${activeTab.content}`}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link
              to="/"
              className={`navbar-item ${location.pathname === '/' ? 'is-active' : ''}`}
            >
              Home
            </Link>
            <Link
              to="/tabs"
              className={`navbar-item ${location.pathname === '/tabs' ? 'is-active' : ''}`}
            >
              Tabs
            </Link>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/tabs" element={<Tabs />}></Route>
      </Routes>
    </>
  );
};

// RECADO PARA AMANHÃ

// VOCE VAI TER QUE FINALIZAR COLOCANDO OS CONTEUDOS DOS TABS, JÁ TA TUDO FEITINHO SÓ FINALIZAR :)
