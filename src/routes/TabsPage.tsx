import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';
type Props = {
  tabs: Tab[];
};

const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();
  const tab = tabs.find(t => t.id === tabId);

  return (
    <div className="container">
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(t => {
            const { id, title } = t;

            return (
              <li
                key={id}
                data-cy="Tab"
                className={t.id === tabId ? 'is-active' : ''}
              >
                <Link to={`/tabs/${id}`}>{title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {tab ? tab.content : 'Please select a tab'}
      </div>
    </div>
  );
};

export default TabsPage;
