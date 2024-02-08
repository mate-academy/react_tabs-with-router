import { Link } from 'react-router-dom';

export const TabsPage = () => (
  <>
    <h1 className="title">Tabs page</h1>

    <div className="tabs is-boxed">
      <ul>
        <li data-cy="Tab" className="is-active">
          <Link to="/">Tab 1</Link>
        </li>
        <li data-cy="Tab">
          <Link to="/">Tab 2</Link>
        </li>
        <li data-cy="Tab">
          <Link to="/">Tab 3</Link>
        </li>
      </ul>
    </div>

    <div className="block" data-cy="TabContent">
      Please select a tab
    </div>
  </>
);
