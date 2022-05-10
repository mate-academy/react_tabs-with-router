import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomaPage';
import { TabsPage } from './pages/TabsPage/TabsPage';
import { Layout } from './components/Layout/Layout';

import './App.scss';
import 'bulma';

const tabs = [
  {
    id: 'tab-1',
    title: 'Tab 1',
    // eslint-disable-next-line max-len
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, eos.',
  },
  {
    id: 'tab-2',
    title: 'Tab 2',
    // eslint-disable-next-line max-len
    content: 'Excepturi cum dignissimos voluptas tempore doloremque ut fuga quam inventore in atque esse libero fugit molestiae, eos perspiciatis!',
  },
  {
    id: 'tab-3',
    title: 'Tab 3',
    // eslint-disable-next-line max-len
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint maiores consectetur fuga?',
  },
];

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="tabs" element={<TabsPage tabs={tabs} />}>
            <Route
              path=":tabId"
              element={<TabsPage tabs={tabs} />}
            />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
