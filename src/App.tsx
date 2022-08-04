import { Routes, Route, Navigate } from 'react-router-dom';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { NavBar } from './navbar/NavBar';
import { HomePage } from './HomePage/HomePage';
import { TabsPage } from './TabsPage/TabsPage';
import { PageNotFound } from './PageNotFound/PageNotFound';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App = () => {
  return (
    <>
      {/* <html class="has-navbar-fixed-top"/> */}
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<HomePage />} />
          <Route path="tabs">
            <Route
              index
              element={(
                <TabsPage
                  tabs={tabs}
                />
              )}
            />
            <Route
              path=":tabId"
              element={(
                <TabsPage
                  tabs={tabs}
                />
              )}
            />
          </Route>
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
