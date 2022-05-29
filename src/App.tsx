import { Route, Routes } from 'react-router-dom';
import { Tabs } from './componets/Tabs/Tabs';
import { Header } from './componets/Header/Header';
import { HomePage } from './componets/HomePage/HomePage';
import { NotFoundPage } from './componets/NotFoundPage/NotFoundPage';
import './App.scss';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path="/tabs" element={<Tabs tabs={tabs} />} />
          <Route path="tabs/:tabId" element={<Tabs tabs={tabs} />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
