import { NavLink, Routes, Route } from 'react-router-dom';
import './App.scss';
import { HomePage } from './component/HomePage';
import { TabsPage } from './component/TabsPage';
import 'bulma';

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
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink
          to="/"
          className="navbar-item is-tab"
        >
          Home
        </NavLink>

        <NavLink
          to="/tabs"
          className="navbar-item is-tab"
        >
          Tabs
        </NavLink>
      </div>
    </nav>

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tabs" element={<TabsPage />} />
      <Route path="/tabs/:tabId" element={<TabsPage />} />
    </Routes>
  </div>
);

export default App;
