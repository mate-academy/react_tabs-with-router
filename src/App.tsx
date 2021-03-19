import React from 'react';
import { Route } from 'react-router-dom';

import './App.scss';
import 'bulma';
import { HomePage } from './components/HomePage';
import { Navigation } from './components/Navigation';
import { TabsPage } from './components/TabsPage';

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
  { id: 'tab-1', title: 'Tab 1', content: '0x1F600' },
  { id: 'tab-2', title: 'Tab 2', content: '0x1F601' },
  { id: 'tab-3', title: 'Tab 3', content: '0x1F602' },
];

const App = () => {
  return (
    <div className="content">
      <div className="App">
        <div className="header">
          <Navigation />
        </div>

        <div className="body">
          <Route path="/" exact component={HomePage} />
          <Route path="/tabs/:tabId?">
            <TabsPage
              tabs={tabs}
            />
          </Route>
        </div>
      </div>
    </div>
  );
};

export default App;
