import { Routes, Route } from 'react-router-dom';
import './App.scss';
import { Navigation } from './components/Navigation';
import { TabsPage } from './components/TabsPage';

const App = () => (
  <div
    className="
      is-flex
      is-flex-direction-column
      is-justify-content-center
      is-align-items-center
    "
  >
    <Navigation />

    <main>
      <Routes>
        <Route path="/" element={<h1 className="title">Home page</h1>} />
        <Route path="/tabs/" element={<TabsPage />}>
          <Route path=":tabId" element={<TabsPage />} />
        </Route>

        <Route path="*" element={<h1>Not found page</h1>} />
      </Routes>
    </main>
  </div>
);

export default App;
