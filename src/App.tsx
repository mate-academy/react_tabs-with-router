import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './sections/HomePage';
import { Header } from './sections/Header';
import { TabsPage } from './sections/TabsPage';

const App = () => {
  return (
    <>
      <Header />
      <div className="section">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="home" element={<Navigate to="/" replace />} />

          <Route path="/tabs">
            <Route index element={<TabsPage />} />

            <Route path=":tabId" element={<TabsPage />} />
          </Route>

          <Route
            path="*"
            element={
              <p>Page not found</p>
            }
          />
        </Routes>
      </div>
    </>
  );
};

export default App;
