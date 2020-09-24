import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.scss';

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
  {
    id: 'tab-1', title: 'Tab 1', content: 'Some text 1',
  },
  {
    id: 'tab-2', title: 'Tab 2', content: 'Some text 2',
  },
  {
    id: 'tab-3', title: 'Tab 3', content: 'Some text 3',
  },
];

const App = () => (
  <BrowserRouter hashType="noslash">
    <div className="App">
      <a href="/">Home</a>
      {' '}
      <a href="/tabs">Tabs</a>
      <br />
      <Route path="/" exact component={() => <h1>Tabs with router</h1>} />
      <Route path="/tabs/:tabId?" component={Tabs} />
    </div>
  </BrowserRouter>
);

const Tabs = ({ match }) => (
  <div>
    {tabs.map(tab => (
      <button
        key={tab.id}
        type="button"
        className={`${tab.id === match.params.tabId && 'button_active'} button`}
      >
        <Link to={`../tabs/${tab.id}`}>
          {tab.title}
        </Link>
      </button>
    ))
    }
    <div className="content">
      {match.params.tabId
        ? tabs.find(tab => tab.id === match.params.tabId).content
        : 'Please select a tab'}
    </div>
  </div>
);

export default App;

Tabs.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object,
  }),
};

Tabs.defaultProps = {
  match: undefined,
};
