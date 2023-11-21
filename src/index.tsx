import ReactDOM from 'react-dom';
import {
  HashRouter,
  // Routes, Route
} from 'react-router-dom';
import { App } from './App';
// import { HomePage } from './types/components/HomePage';
// import { TabsList } from './types/components/TabsList';
// import { WrongPage } from './types/components/WrongPage';

ReactDOM.render(
  <HashRouter>
    {/* <Routes>
      <Route path="*" element={<WrongPage />} />
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="tabs" element={<TabsList />} />
      </Route>
    </Routes> */}
    <App />
  </HashRouter>,
  document.getElementById('root'),
);
