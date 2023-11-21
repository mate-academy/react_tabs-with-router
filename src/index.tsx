import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { App } from './App';
import { TabContent } from './TabContext';

ReactDOM.render(
  <HashRouter>
    <TabContent>
      <App />
    </TabContent>
  </HashRouter>,
  document.getElementById('root'),
);
