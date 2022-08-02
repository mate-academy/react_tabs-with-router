# React Tabs with Router

> Here is [the working version](https://mate-academy.github.io/react_tabs-with-router)

Implement the `App` with `Home` page available at `/` and `Tabs` page available
at `/tabs`. Each page should have the correct title `Home page` or `Tabs page`.
The `Tabs` page should also show a `Tabs` component implemented in [React Tabs](https://github.com/mate-academy/react_tabs#react-tabs).

1. Navigation with `Home` and `Tabs` links
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
    - read `tabId` from the URL using [useParams](https://reactrouter.com/docs/en/v6/hooks/use-params) hook;
    - if the `tabId` does not match any tab show `Please select a tab` message instead of a tab content.
1. The page should show the same content after a reload.
1. Redirect from `/home` to `/` using the [Navigate](https://reactrouter.com/docs/en/v6/components/navigate) component;
1. Show the `Page not found` title for all the other URLs;

## Instructions

- Implement a solution following the [React task guideline](https://github.com/mate-academy/react_task-guideline#react-tasks-guideline).
- Use the [React TypeScript cheat sheet](https://mate-academy.github.io/fe-program/js/extra/react-typescript).
- Open one more terminal and run tests with `npm test` to ensure your solution is correct.
- Replace `<your_account>` with your Github username in the [DEMO LINK](https://<your_account>.github.io/react_tabs-with-router/) and add it to the PR description.

