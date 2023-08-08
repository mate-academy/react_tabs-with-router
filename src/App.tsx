import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Tabs from './components/Tabs';
import NotFound from './components/NotFound';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  return (
    <Router>
      <>
        <Navbar />
        <div className="section">
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/" render={() => <Tabs tabs={tabs} />} />
              <Route path="/:tabId" render={() => <Tabs tabs={tabs} />} />
              <Redirect from="/home" to="/" />
              <Route path="/tabs/:tabId">
                <NotFound />
              </Route>
            </Switch>
          </div>
        </div>
      </>
    </Router>
  );
};
