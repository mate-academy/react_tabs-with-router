import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';
import { Tab } from './types/Tab';

interface Props {
  tabs: Tab[];
}

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();
  const isSelected = (tab: Tab) => tab.id === tabId;
  const activeTab = tabs.find(tab => tab.id === tabId) || [];

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="tab"
              className={classNames({
                'is-active': isSelected(tab),
              })}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="tab-content">
        {'content' in activeTab ? activeTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
