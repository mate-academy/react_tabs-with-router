import ReactDOM from 'react-dom';
import { HashRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import { Tab } from './components/Tab';

ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path=":tabId" element={<Tab />} />
      </Route>
    </Routes>
  </HashRouter>,
  document.getElementById('root'),
);
