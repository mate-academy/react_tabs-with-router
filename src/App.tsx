import { Routes, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { TabsPage } from './components/TabsPage';
import { Navigation } from './components/Navigation';
import './App.scss';
import { PageNotFound } from './components/PageNotFound';

const App:React.FC = () => (
  <div className="App">
    <Navigation />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tabs" element={<TabsPage />}>
        <Route path="/tabs:tabId" element={<TabsPage />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </div>
);

export default App;
