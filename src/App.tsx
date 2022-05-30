import { Link, Route, Routes } from 'react-router-dom';
import './App.scss';

/*
import { RouteComponentProps } from 'react-router-dom';

type TabsPageProps = React.FC<RouteComponentProps<{ tabId: string }>>;
const TabsPage: TabsPageProps = ({ match }) => {...};

or

import { useParams } from 'react-router-dom';

const TabsPage = () => {
  const { tabId } = useParams<{ tabId: string }>();
  ...
};
*/

// const tabs = [
//   { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
//   { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
//   { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
// ];

const App = () => (
  <div className="App">
    <h1>Tabs with router</h1>

    <nav className="navbar">
      <Link
        className="navbar-item"
        to="/"
      >
        Home page
      </Link>
      <Link
        className="navbar-item"
        to="/tabs"
      >
        Tabs page
      </Link>
    </nav>

    <Routes>
      <Route path="/" element={<h1>Home page</h1>} />
      <Route path="tabs" element={<h1>Tabs page</h1>} />

      <Route path="*" element={<h1>Home page</h1>} />
    </Routes>
  </div>
);

export default App;
