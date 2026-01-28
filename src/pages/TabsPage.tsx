import { Link, useParams } from 'react-router-dom';
import { tabs } from '../App';
import classNames from 'classnames';

export const TabsPage: React.FC = () => {
  const { tabId } = useParams();
  const active = tabs.find(tab => tab.id === tabId);

  return (
    <div className="container">
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={classNames({ 'is-active': tab.id === tabId })}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {active ? active.content : <>Please choose a tab</>}
      </div>
    </div>
  );
};
