import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from '../../Pages/Home';
import { NotFound404 } from '../../Pages/NotFound404';
import { Tabs } from '../../Pages/Tabs';

export const PageRouter:React.FC = () => (
  <div className="container">
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/home" element={<Navigate to="/" />} />

      <Route path="/tabs">
        <Route index element={<Tabs />} />

        <Route path=":tabId?" element={<Tabs />} />
      </Route>

      <Route path="*" element={<NotFound404 />} />
    </Routes>
  </div>
);
