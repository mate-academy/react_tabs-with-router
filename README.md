# React Tabs with Router
- Replace `<your_account>` with your Github username in the
  [DEMO LINK](https://germandolia.github.io/react_tabs-with-router/)
- Follow the [React task guideline](https://github.com/mate-academy/react_task-guideline#react-tasks-guideline)

## Description
![tabs](./description/tabs.gif)

Implement `Tabs` component. `current` prop sets the active tab by its `id`.
```javascript
let tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];
```
```jsx harmony
<Tabs
  tabs={tabs}
  currentTabId="tab-2"
/>
```

1. Add 2 pages `Home` and `Tabs`.
    - `HomePage` is shown on `localhost:3000` and contains a header `Home`.
    - `TabsPage` is shown on `localhost:3000/tabs` and contains a header `Tabs` and a `Tabs` component.
1. Add navigation links so you can go to `HomePage` or `TabsPage` by clicking one of them.
    - The navigation should be visible from all the pages.
    - An active link should be highlighted.
1. When you select a tab the URL should be changed to `/tabs/tab-1`.
  (where `tab-1` is an `id` of a selected tab)
1. After the page reload you should see a content of the tab matching the `id` from the URL.
    - If an `id` is not valid or is not set (e.g just `/tabs`) don't show any content.
