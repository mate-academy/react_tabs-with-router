import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.scss';
import { Navigation } from './Components/Navigation/Navigation';
import { HomePage } from './Components/HomePage/HomePage';
import { TabsPage } from './Components/TabsPage/TabsPage';

/*
import { RouteComponentProps } from 'react-router-dom';

type TabsPageProps = React.FC<RouteComponentProps<{ tabId: string }>>;
const TabsPage: TabsPageProps = ({ match }) => {...};

or

import { useParams } from 'react-router-dom';

const TabsPage = () => {
  const { tabId } = useParams<{ tabId: string }>();
  ...
};
*/

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App:React.FC = () => (
  <div className="App">
    <Navigation />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tabs/*" element={<TabsPage tabs={tabs} />} />
    </Routes>
  </div>
);

export default App;
