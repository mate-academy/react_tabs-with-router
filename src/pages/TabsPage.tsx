import { Link } from 'react-router-dom';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage = () => (
  <>
    <h1 className="title">Tabs page</h1>
    <div className="tabs is-boxed">
      <ul>
        <li data-cy="Tab" className="is-active">
          <Link to="#/">Tab 1</Link>
        </li>
        <li data-cy="Tab">
          <Link to="#/">Tab 2</Link>
        </li>
        <li data-cy="Tab">
          <Link to="#/">Tab 3</Link>
        </li>
      </ul>
    </div>

    <div className="block" data-cy="TabContent">
      Please select a tab
    </div>
  </>
);
