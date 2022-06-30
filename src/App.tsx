import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import HomePage from './HomePage/HomePage';
import Nav from './Nav/Nav';
import PageNotFound from './PageNotFound/PageNotFound';
import TabsPage from './TabsPage/TabsPage';

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
    <h1 className="App__title">Tabs with router</h1>
    <Nav />

    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/tabs" element={<TabsPage tabs={tabs} />}>
        <Route path=":tabId" element={<TabsPage tabs={tabs} />} />
      </Route>

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </div>
);

export default App;
