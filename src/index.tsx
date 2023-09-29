import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { App } from './App';

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.render(
    <HashRouter>
      <App />
    </HashRouter>,
    rootElement,
  );
}
