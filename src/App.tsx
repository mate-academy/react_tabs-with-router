import { Route, Routes } from 'react-router-dom';
import './App.scss';
import 'bulma';
import { TabsPage } from './Components/TabsPage';
import { NotFoundPage } from './Components/NotFounPage';
import { HomePage } from './Components/HomePage';
import { Navigation } from './Components/Navigation';

const App = () => (
  <div className="App">
    <header>
      <Navigation />
    </header>
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tabs">
          <Route index element={<TabsPage />} />
          <Route path=":tabId" element={<TabsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
  </div>
);

export default App;
