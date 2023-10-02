import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { App } from './App';
import { TabProvider } from './components/Tabs/TabContext';

ReactDOM.render(
  <HashRouter>
    <TabProvider>
      <App />
    </TabProvider>
  </HashRouter>,
  document.getElementById('root'),
);
