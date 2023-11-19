import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import {
  App,
} from './App';
import { TabsProvider } from './components/Context';
import { Home } from './components/Home';
import { Tabs } from './components/Tabs';
import { InvalidAddress } from './components/InvalidAddress';

ReactDOM.render(
  <Router>
    <TabsProvider>
      <Routes>
        <Route path="/" element={<App />}>

          <Route
            index
            element={<Home />}
          />

          <Route path="/home" element={<Navigate to="/" />} />

          <Route path="tabs" element={<Tabs />}>
            <Route path=":id" element={<Tabs />} />
          </Route>

          <Route path="*" element={<InvalidAddress />} />
        </Route>
      </Routes>
    </TabsProvider>
  </Router>,
  document.getElementById('root'),
);
