import { Routes, Route } from 'react-router-dom';
import './App.scss';
import { Layout } from './component/Layout';
import { HomePage } from './component/Pages/HomePage';
import { TabsPage } from './component/Pages/TabsPage';

const App: React.FC = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="tabs" element={<TabsPage />}>
          <Route path=":tabId" element={<TabsPage />} />
        </Route>
        <Route path="*" element={<p>Page not found!</p>} />
      </Route>
    </Routes>
  </div>
);

export default App;
