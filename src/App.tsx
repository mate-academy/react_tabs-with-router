import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import {
  Navigate, Route, Routes,
} from 'react-router-dom';
import { HomePage } from './component/HomePage';
import { NotFoundPage } from './component/NotFoundPage';
import { PageTabs } from './component/PageTabs';
import { NavigationLink } from './component/NavigationLink/NavigationLink';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavigationLink addr="/" content="Home" />
            <NavigationLink addr="/tabs" content="Tabs" />
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/tabs">
          <Route index element={<PageTabs tabs={tabs} />} />
          <Route path=":tabId" element={<PageTabs tabs={tabs} />} />
        </Route>
      </Routes>
    </>
  );
};
