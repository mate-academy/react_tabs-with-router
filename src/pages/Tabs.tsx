import { Link, useParams } from 'react-router-dom';
import { tabs } from '../data/tabs';
import classNames from 'classnames';
import Tab from '../components/Tab';

function TabsPage() {
  const { tabId } = useParams();
  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={classNames({ 'is-active': tabId && tabId === tab.id })}
            >
              <Link to={`../${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <Tab tabId={tabId} />
    </>
  );
}

export default TabsPage;
