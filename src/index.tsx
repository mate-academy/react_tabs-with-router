import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import 'bulma/css/bulma.min.css';

import App from './App';

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,

  document.getElementById('root'),
);
