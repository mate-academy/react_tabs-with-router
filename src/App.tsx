import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { HomePage } from './components/HomePage/HomePage';
import { TabsPage } from './components/TabsPage/TabsPage';
import 'bulma';
import { NotFoundPage } from './components/NotFoundPage/NotFoundPage';
import { Navigation } from './components/Navigation/Navigation';

const App: FC = () => (
  <div className="App">
    <Navigation />

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tabs" element={<TabsPage />}>
        <Route path=":tabId" />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </div>
);

export default App;
