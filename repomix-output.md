This file is a merged representation of a subset of the codebase, containing specifically included files, combined into a single document by Repomix.

<file_summary>
This section contains a summary of this file.

<purpose>
This file contains a packed representation of a subset of the repository's contents that is considered the most important context.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.
</purpose>

<file_format>
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  - File path as an attribute
  - Full contents of the file
</file_format>

<usage_guidelines>
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.
</usage_guidelines>

<notes>
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Only files matching these patterns are included: src/**/*, README.md
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)
</notes>

</file_summary>

<directory_structure>
src/
  pages/
    HomePage.tsx
    TabsPage.tsx
  types/
    Tab.ts
  App.scss
  App.tsx
  index.tsx
  vite-env.d.ts
README.md
</directory_structure>

<files>
This section contains the contents of the repository's files.

<file path="src/pages/HomePage.tsx">
export const HomePage = () => {
  return <h1 className="title">Home page</h1>;
};
</file>

<file path="src/types/Tab.ts">
export interface Tab {
  id: string;
  title: string;
  content: string;
}
</file>

<file path="src/vite-env.d.ts">
/// <reference types="vite/client" />
</file>

<file path="src/pages/TabsPage.tsx">
import { useParams, Link } from 'react-router-dom';
import cn from 'classnames';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage = () => {
  const { tabId } = useParams();
  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={cn({ 'is-active': tab.id === tabId })}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title} </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab ? selectedTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
</file>

<file path="src/App.scss">
iframe {
  display: none;
}
</file>

<file path="src/index.tsx">
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { App } from './App';

createRoot(document.getElementById('root') as HTMLElement).render(
  <HashRouter>
    <App />
  </HashRouter>,
);
</file>

<file path="src/App.tsx">
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { HomePage } from './pages/HomePage';
import { TabsPage } from './pages/TabsPage';

export const App = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `navbar-item ${isActive ? 'is-active' : ''}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/tabs"
            className={({ isActive }) =>
              `navbar-item ${isActive ? 'is-active' : ''}`
            }
          >
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>

    <div className="section">
      <div className="container">
        <Routes>
          <Route path='home' element={<Navigate path="/" replace />} />
          <Route path="/" element={<HomePage />} />
          <Route path="tabs">
            <Route index element={<TabsPage />} />
            <Route path=":tabId" element={<TabsPage />} />
          </Route>
          <Route path="*" element={<h1 className="title">Page not found</h1>} />
        </Routes>
      </div>
    </div>
  </>
);
</file>

<file path="README.md">
# React Tabs with Router

Implement the `App` with `Home` page available at `/` and `Tabs` page available
at `/tabs`. Each page should have the correct title `Home page` or `Tabs page`.
The `Tabs` page should also show a `Tabs` component implemented in [React Tabs JS](https://github.com/mate-academy/react_tabs-js#react-tabs-js)
or [React Tabs](https://github.com/mate-academy/react_tabs#react-tabs).

> Here is [the working version](https://mate-academy.github.io/react_tabs-with-router)

1. Navigation with `Home` and `Tabs` links:
    - should be visible on every page;
    - should highlight an active link with `is-active` class;
1. `TabsPage` page should work for both `/tabs` and `/tabs/:tabId` paths (use nested routes);
    ```tsx
    <Route path="tabs">
      <Route index element={<TabsPage />} />
      <Route path=":tabId" element={<TabsPage />} />
    </Route>
    ```
1. Each tab should update the URL on click.
    - the URL should follow the next format `/tabs/:tabId` (use actual `tab.id` instead of `:tabId`);
    - replace `<a href="#...">` with `<Link to="/tabs/...">` and remove `onClick`;
    - **don't** use `NavLink` as `is-active` class is added to a parent element;
    - read `tabId` from the URL using [useParams](https://reactrouter.com/en/main/hooks/use-params) hook;
    - if the `tabId` does not match any tab show `Please select a tab` message instead of a tab content.
1. The page should show the same content after a reload.
1. Redirect from `/home` to `/` using the [Navigate](https://reactrouter.com/en/main/components/navigate) component;
1. Show the `Page not found` title for all the other URLs;

## Instructions
- Install Prettier Extention and use this [VSCode settings](https://mate-academy.github.io/fe-program/tools/vscode/settings.json) to enable format on save.
- Implement a solution following the [React task guideline](https://github.com/mate-academy/react_task-guideline#react-tasks-guideline).
- Use the [React TypeScript cheat sheet](https://mate-academy.github.io/fe-program/js/extra/react-typescript).
- Open one more terminal and run tests with `npm test` to ensure your solution is correct.
- Replace `<your_account>` with your Github username in the [DEMO LINK](https://Grigoriy01.github.io/react_tabs-with-router/) and add it to the PR description.
</file>

</files>
