import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { App } from './App';
import { TabsProvider } from './context/TabsContext';

ReactDOM.render(
  <HashRouter>
    <TabsProvider>
      <App />
    </TabsProvider>
  </HashRouter>,
  document.getElementById('root'),
);
