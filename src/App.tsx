import { Route, Routes, useParams } from 'react-router-dom';
import './App.scss';
import { TabsPage } from './components/TabsPage/TabsPage';
import { Home } from './components/Home/Home';
import { Nav } from './components/Nav/Nav';

const App = () => {
  const { tabId } = useParams<{ tabId: string }>();

  return (
    <div className="App level-item has-text-centered">
      <Nav />

      <Routes>
        <Route
          path="home"
          element={(
            <>
              <h1>Home Page</h1>
              <Home />
            </>
          )}
        />

        <Route
          path="tabs"
          element={
            <TabsPage />
          }
        />

        <Route
          path={`/tabs/:${tabId}`}
          element={
            <TabsPage />
          }
        />

        <Route
          path="*"
          element={(
            <p>Ooops! Page not found</p>
          )}
        />
      </Routes>
    </div>
  );
};

export default App;
