import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';
import { Tab } from '../types/Tab';

export const TabsPage = ({ tabs }: { tabs: Tab[] }) => {
  const { tabId } = useParams();
  const selectedTabName = tabs
    .find(tab => tabId === tab.id)?.content || 'Please select a tab';

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              className={classNames(
                { 'is-active': tabId === tab.id },
              )}
              key={tab.id}
            >
              <Link to={`../${tab.id}`}>
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTabName}
      </div>
    </>
  );
};
