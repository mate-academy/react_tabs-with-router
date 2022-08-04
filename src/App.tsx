import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Header } from './Header/Header';
import { Tabs } from './components/Tabs';

const App = () => {
  return (
    <>
      <Header />

      <div className="section">
        <Routes>
          <Route
            path="/"
            element={<h1 className="title">Home page</h1>}
          />
          <Route
            path="/home"
            element={<Navigate to="/" />}
          />
          <Route path="tabs">
            <Route index element={<Tabs />} />
            <Route path=":tabId" element={<Tabs />} />
          </Route>
          <Route
            path="*"
            element={<h1 className="title">Page not found</h1>}
          />
        </Routes>
      </div>
    </>
  );
};

export default App;
