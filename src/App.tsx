import {
  Navigate, Route, Routes,
} from 'react-router-dom';
import './App.scss';
import { Header } from './components/Header/Header';
import { HomePage } from './components/HomePage/HomePage';
import { PageTabs } from './components/TapsPage/TabsPage';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => {
  return (
    <div className="app container is-desktop">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route
          path="/tabs"
          element={
            (
              <PageTabs
                tabs={tabs}
              />
            )
          }
        />

        <Route
          path="/tabs/:tabId"
          element={
            (
              <PageTabs
                tabs={tabs}
              />
            )
          }
        />
      </Routes>
    </div>
  );
};

export default App;
