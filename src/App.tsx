import './App.scss';
import {
  Route, Routes,
} from 'react-router-dom';
import { TabsPage } from './TabsPage';
import { Navigation } from './Navigation';

const App = () => {
  return (
    <div className="App">
      <Navigation />

      <main>
        <Routes>
          <Route path="/" element={<h1>Home page</h1>} />
          <Route path="/tabs/" element={<TabsPage />}>
            <Route path=":tabId" element={<TabsPage />} />
          </Route>

          <Route path="*" element={<h1>Not found page</h1>} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
