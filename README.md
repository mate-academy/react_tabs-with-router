# React Tabs with Router

Implement the `App` with `Home` page available at `/` and `Tabs` page available
at `/tabs`. Each page should have the correct title `Home page` or `Tabs page`.
The `Tabs` page should also show a `Tabs` component implemented in [React Tabs](https://github.com/mate-academy/react_tabs#react-tabs).

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
    - read `tabId` from the URL using [useParams](https://reactrouter.com/docs/en/v6/hooks/use-params) hook;
    - if the `tabId` does not match any tab show `Please select a tab` message instead of a tab content.
1. The page should show the same content after a reload.
1. Redirect from `/home` to `/` using the [Navigate](https://reactrouter.com/docs/en/v6/components/navigate) component;
1. Show the `Page not found` title for all the other URLs;

## Instructions

- Implement a solution following the [React task guideline](https://github.com/mate-academy/react_task-guideline#react-tasks-guideline).
- Use the [React TypeScript cheat sheet](https://mate-academy.github.io/fe-program/js/extra/react-typescript).
- Open one more terminal and run tests with `npm test` to ensure your solution is correct.
- Replace `<your_account>` with your Github username in the [DEMO LINK](https://emxm.github.io/react_tabs-with-router/) and add it to the PR description.

# React Tabs з маршрутизатором

Впровадити `App` з `Home` сторінкою, доступною в `/`, і доступною сторінкою `Tabs`
на `/tabs`. Кожна сторінка повинна мати правильний заголовок `Home page` або `Tabs page`.
На сторінці `Tabs` також має відображатися компонент `Tabs`, реалізований у [React Tabs](https://github.com/mate-academy/react_tabs#react-tabs).

> Ось [the working version](https://mate-academy.github.io/react_tabs-with-router)

1. Навігація за допомогою посилань `Home` і `Tabs`:
     - має бути видно на кожній сторінці;
     - слід висвітлити активне посилання з класом `is-active`;
1. Сторінка `TabsPage` має працювати як для шляхів `/tabs`, так і `/tabs/:tabId` (використовуйте вкладені маршрути);
     ```tsx
     <Route path="tabs">
       <Route index element={<TabsPage />} />
       <Route path=":tabId" element={<TabsPage />} />
     </Route>
     ```
1. Кожна вкладка має оновлювати URL-адресу після натискання.
     - URL-адреса має відповідати наступному формату `/tabs/:tabId` (використовуйте фактичний `tab.id` замість `:tabId`);
     - замінити `<a href="#...">` на `<Link to="/tabs/...">` і видалити `onClick`;
     - **не** використовуйте `NavLink`, оскільки клас `is-active` додається до батьківського елемента;
     - читати `tabId` з URL-адреси за допомогою хука [useParams](https://reactrouter.com/docs/en/v6/hooks/use-params);
     - якщо `tabId` не відповідає жодній вкладці, відображати повідомлення `Please select a tab` замість вмісту вкладки.
1. Сторінка має відображати той самий вміст після перезавантаження.
1. Переспрямуйте з `/home` на `/` за допомогою компонента [Navigate](https://reactrouter.com/docs/en/v6/components/navigate);
1. Показати заголовок `Page not found` для всіх інших URL-адрес;