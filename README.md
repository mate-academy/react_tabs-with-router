# React Tabs with Router

## Task 

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
1. Add 2 pages `Home` and `Tabs` 
    - `HomePage` is shown on `localhost:3000` and contains a header `Home` 
    - `TabsPage` is shown on `localhost:3000/tabs` and contains a header `Tabs` and a `Tabs` component
2. Add navigation so you can go to `HomePage` or `TabsPage` by clicking on a link
    - The navigation should be visible from all the pages.
    - The active link should be highlighted.
3. When you select a tab the URL should be changed to `/tabs/tab-1`
  (where `tab-1` is an `id` of selected tab)
4. After page reload you should see the content of a tab matching the `id` from the URL
    - If a `id` is not valid or is not set (e.g just `/tabs`) don't show any content 
    
## Workflow

- Fork the repository with task
- Clone forked repository 
    ```bash
    git clone git@github.com:<user_name>/<task_repository>.git
    ```
- Run `npm install` to install dependencies.
- Then develop

## Development mode 

- Run `npm start` to start development server on `http://localhost:3000`
    When you run server the command line window will no longer be available for 
    writing commands until you stop server (`ctrl + c`). All other commands you 
    need to run in new command line window.
- Follow [HTML, CSS styleguide](https://mate-academy.github.io/style-guides/htmlcss.html)
- Follow [the simplified JS styleguide](https://mate-academy.github.io/style-guides/javascript-standard-modified)
- run `npm run lint` to check code style
- When you finished add correct `homepage` to `package.json` and run `npm run deploy` 
- Add links to your demo in readme.md.
  - `[DEMO LINK](https://<your_account>.github.io/<repo_name>/)` - this will be a 
  link to your index.html
- Commit and push all recent changes.
- Create `Pull Request` from forked repo `(<branch_name>)` to original repo 
(`master`).
- Add a link at `PR` to Google Spreadsheets.

## Project structure

You should be writing your code in `src/` directory.
