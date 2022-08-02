import { Navigate, Route, Routes } from 'react-router-dom';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { NavBar } from './NavBar/NavBar';
import { HomePage } from './HomePage/HomePage';
import { PageNotFound } from './PageNotFound/PageNotFound';
import { TabsPage } from './TabsPage/TabsPage';
import { Tab } from './types/Tab';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => (
  <>
    <NavBar />

    <div className="section">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/home"
          element={<Navigate to="/" replace />}
        />
        <Route path="/tabs" element={<TabsPage tabs={tabs} />}>
          <Route path=":tabId" element={<TabsPage tabs={tabs} />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />

      </Routes>
    </div>
  </>
);

export default App;
