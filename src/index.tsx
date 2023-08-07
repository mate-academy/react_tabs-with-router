import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { App } from './App';
import { Root } from './routes/Root';

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root'),
);

ReactDOM.render(<Root />, document.getElementById('root'));
