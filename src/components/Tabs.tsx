import { Tab } from '../types/Tab';
import { Link, useParams } from 'react-router-dom';

interface Props {
  tabs: Tab[];
}

export const Tabs = ({ tabs }: Props) => {
  const { tabId } = useParams();

  const activeTab = tabs.find(tab => tab.id === tabId);

  return (
    <div>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                key={tab.id}
                data-cy="Tab"
                className={tab.id === tabId ? 'is-active' : ''}
              >
                <Link data-cy="TabLink" to={`/tabs/${tab.id}`}>
                  {tab.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab !== undefined ? activeTab.content : 'Please select a tab'}
      </div>
    </div>
  );
};
