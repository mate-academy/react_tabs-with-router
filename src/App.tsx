import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import {
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { Tabs } from './Tabs/Tabs';
import { HomePage } from './Home-page/Home-page';
import { NotFound } from './Not-Found-page/not-found';
import { Navigation } from './Navigation/Navigation';

export const App:React.FC = () => {
  return (
    <>
      <Navigation />

      <div className="section">
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<Navigate to="/" replace />} />

            <Route path="/tabs">
              <Route index element={<Tabs />} />
              <Route path=":tabId" element={<Tabs />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </>
  );
};
