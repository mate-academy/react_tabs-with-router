import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Tabs } from './Tabs';
import { Nav } from './Nav';
import { HomePage } from './HomePage';
import { PageNotFound } from './PageNotFound';

const App = () => (
  <>
    <Nav />

    <div className="section">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tabs">
          <Route index element={<Tabs />} />
          <Route path=":tabId" element={<Tabs />} />
        </Route>
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  </>
);

export default App;
