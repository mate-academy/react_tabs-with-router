import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Layout } from './components/Layout';

ReactDOM.render(
  <HashRouter>
    <Layout />
  </HashRouter>,
  document.getElementById('root'),
);
