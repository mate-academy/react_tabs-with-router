import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import '../node_modules/bulma/css/bulma.css';
import App from './App';

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root'),
);
