import { Link, useOutletContext, useParams } from 'react-router-dom';
import classNames from 'classnames';
import { Tab } from '../types/Tab';

export const TabsPage = () => {
  const tabs = useOutletContext<Tab[]>();
  const { tabId } = useParams();
  const currentTab = tabs.find(tab => tab.id === tabId);

  const content = !currentTab
    ? 'Please select a tab'
    : currentTab.content;

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              className={classNames({
                'is-active': tab.id === tabId,
              })}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {content}
      </div>
    </>
  );
};
