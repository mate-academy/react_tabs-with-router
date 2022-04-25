import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import { NotFound } from './components/NotFound';
import { Tabs } from './components/Tabs';
import { Tab } from './components/Tab';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="tabs" element={<Tabs />}>
          <Route index element={<NotFound />} />
          <Route path=":tabId" element={<Tab />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root'),
);
