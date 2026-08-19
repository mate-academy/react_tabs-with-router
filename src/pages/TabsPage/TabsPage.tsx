import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';

export const TabsPage: React.FC = () => {
  const { tabId } = useParams();
  const VALID_TABS = ['tab-1', 'tab-2', 'tab-3'];

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          <li
            data-cy="Tab"
            className={classNames({ 'is-active': tabId === 'tab-1' })}
          >
            <Link to="tab-1">Tab 1</Link>
          </li>
          <li
            data-cy="Tab"
            className={classNames({ 'is-active': tabId === 'tab-2' })}
          >
            <Link to="tab-2">Tab 2</Link>
          </li>
          <li
            data-cy="Tab"
            className={classNames({ 'is-active': tabId === 'tab-3' })}
          >
            <Link to="tab-3">Tab 3</Link>
          </li>
        </ul>
      </div>

      {tabId === 'tab-1' && (
        <div className="block" data-cy="TabContent">
          Some text 1
        </div>
      )}
      {tabId === 'tab-2' && (
        <div className="block" data-cy="TabContent">
          Some text 2
        </div>
      )}
      {tabId === 'tab-3' && (
        <div className="block" data-cy="TabContent">
          Some text 3
        </div>
      )}
      {!tabId || !VALID_TABS.includes(tabId) ? (
        <div data-cy="TabContent" className="tab-content">
          Please select a tab
        </div>
      ) : null}
    </>
  );
};
