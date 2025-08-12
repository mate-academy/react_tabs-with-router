import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import HomePage from '../HomePage/HomePage';
import NotFound from '../NotFound/NotFound';
import TabsPage from '../TabsPage/TabsPage';

const Root = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="tabs">
        <Route index element={<TabsPage />} />
        <Route path=":tabId" element={<TabsPage />} />
      </Route>

      <Route path="home" element={<Navigate to="/" replace />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
);

export default Root;
