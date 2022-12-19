import ReactDOM from 'react-dom';
import {
  HashRouter, Navigate, Route, Routes,
} from 'react-router-dom';
import { App } from './App';
import { HomePage } from './Components/HomePage';
import { TabsPage } from './Components/TabsPage';
import { ErrorPage } from './Components/ErrorPage';

ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<ErrorPage />} />

        <Route path="/tabs">
          <Route index element={<TabsPage />} />
          <Route path=":id" element={<TabsPage />} />
        </Route>
      </Route>
    </Routes>
  </HashRouter>,
  document.getElementById('root'),
);
