import { Link, useParams } from 'react-router-dom';
import { useTabs } from '../store/TabsContext';
import classNames from 'classnames';

export const TabsPage = () => {
  const { tabs } = useTabs();
  const { tabId } = useParams();

  function getActiveTabContent() {
    return tabs.find(tab => tab.id === tabId)?.content;
  }

  function isValidTabId() {
    return tabs.some(tab => tab.id === tabId);
  }

  return (
    <div data-cy="TabsComponent">
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={classNames({ 'is-active': tabId === tab.id })}
              data-cy="Tab"
              key={tab.id}
            >
              <Link to={`/tabs/${tab.id}`} data-cy="TabLink">
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {!tabId || !isValidTabId()
          ? 'Please select a tab'
          : getActiveTabContent()}
      </div>
    </div>
  );
};
