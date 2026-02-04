import { useParams, Link } from 'react-router-dom';
import { Props } from '../../pages/TabsPage/TabsPage';

export const Tabs: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();

  const activeTab = tabs.find(tab => tab.id === tabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }) => (
            <li
              className={tabId === id ? 'is-active' : ''}
              data-cy="Tab"
              key={id}
            >
              <Link to={`/tabs/${id}`} data-cy="TabLink">
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {activeTab ? activeTab.content : 'Please select a tab'}
      </div>
    </div>
  );
};
