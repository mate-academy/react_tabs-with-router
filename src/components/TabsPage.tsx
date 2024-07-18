import { Link, useParams } from 'react-router-dom';
import { Tabs } from '../tabs';
import cn from 'classnames';

export const TabsPage = () => {
  const { tabId } = useParams();
  const selectedTab = Tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {Tabs.map(tab => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={cn({ 'is-active': tabId === tab.id })}
            >
              <Link to={`../${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab?.content || 'Please select a tab'}
      </div>
    </>
  );
};
