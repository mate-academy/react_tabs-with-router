import classNames from 'classnames';
import { Link, useOutletContext, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';

type OutletContextProps = {
  tabs: Tab[];
};

export const TabsPage = () => {
  const { tabs } = useOutletContext<OutletContextProps>();
  const { tabId } = useParams();
  const activeTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={classNames({ 'is-active': tab.id === activeTab?.id })}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab ? activeTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
