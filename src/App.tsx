import { Link, Route, Routes } from 'react-router-dom';
import './App.scss';
import { ErrorPage } from './components/ErrorPage/ErrorPage';
import { HomePage } from './components/HomePage/HomePage';
import { Tabs } from './components/Tabs/Tabs';

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

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => (
  <>
    <header className="header">
      <nav className="header__nav">
        <Link to="/" className="header__nav-item">HomePage</Link>
        <Link to="/tabs" className="header__nav-item">Tabs</Link>
      </nav>
    </header>

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tabs" element={<Tabs tabs={tabs} />}>
        <Route path=":tabId" />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </>
);

export default App;
