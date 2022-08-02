import { Routes, Route } from 'react-router-dom';
import './App.scss';
import { Navigation } from './components/Navigation';
import { TabsPage } from './components/TabsPage';

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
  <div
    className="
      is-flex
      is-flex-direction-column
      is-justify-content-center
      is-align-items-center
    "
  >
    <Navigation />

    <main>
      <Routes>
        <Route path="/" element={<h1 className="title">Home page</h1>} />
        <Route path="/tabs/" element={<TabsPage />}>
          <Route path=":tabId" element={<TabsPage />} />
        </Route>

        <Route path="*" element={<h1>Not found page</h1>} />
      </Routes>
    </main>
  </div>
);

export default App;
