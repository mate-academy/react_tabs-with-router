import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './HomePage';
import { TabsPage } from './TabsPage';

export const Main = () => {
  return (
    <div className="section">
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/tabs/:tabId?" element={<TabsPage />} />

          <Route path="*" element={<h1 className="title">Page not found</h1>} />
        </Routes>
      </div>
    </div>
  );
};
