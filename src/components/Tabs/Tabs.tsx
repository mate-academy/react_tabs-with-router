import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';

export const Tabs = () => {
  const { tabId } = useParams();
  const validTabs = ['tab-1', 'tab-2', 'tab-3'];
  const isValidTab = validTabs.includes(tabId || '');
  const tabContent = tabId?.slice(-1);



  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          <li data-cy="Tab" className={classNames('', { 'is-active': tabId === 'tab-1'})}>
            <Link to="../tab-1">Tab 1</Link>
          </li>
          <li data-cy="Tab" className={classNames('', { 'is-active': tabId === 'tab-2'})}>
            <Link to="../tab-2">Tab 2</Link>
          </li>
          <li data-cy="Tab" className={classNames('', { 'is-active': tabId === 'tab-3'})}
          >
            <Link to="../tab-3">Tab 3</Link>
          </li>
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {!isValidTab ? 'Please select a tab' : `Some text ${tabContent}`}
      </div>
    </>
  );
}
