import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';
import { tabs } from '../../data/tabs';

export const TabsPage = () => {
  const { tabId } = useParams();
  const tabContent = tabs.find(tab => tab.id === tabId);

  return (
    <div>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={classNames({
                'is-active': tabId === tab.id,
              })}
            >
              <Link to={`../${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabId
          ? tabContent?.content
          : 'Please select a tab'}
      </div>
    </div>
  );
};
