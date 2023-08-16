import cn from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { tabs } from '../date/tabs';

export const TabsPage = () => {
  const { tabId } = useParams();
  const getTabById = tabs.find((tab) => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={cn({ 'is-active': tabId === tab.id })}
            >
              <Link to={`../${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {getTabById ? getTabById.content : 'Please select a tab'}
      </div>
    </>
  );
};
