import { Routes, Route } from 'react-router-dom';
import './App.scss';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { NotFoundPage } from './components/NotFoundPage/NotFoundPage';
import { TabsPage } from './components/TabsPage/TabsPage';

const App:React.FC = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tabs" element={<TabsPage />}>
          <Route path="/tabs:tabId" element={<TabsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
