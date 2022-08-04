import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[],
};

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();
  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <div className="tabs is-boxed">
      <div>
        <h1 className="title">Tabs page</h1>
        <ul>
          {tabs.map(tab => (
            <li data-cy="tab">
              <Link
                to={`/tabs/${tab.id}`}
                className={classNames(
                  { 'isActive is-active': tab.id === selectedTab?.id },
                )}
              >
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="block content" data-cy="tab-content">
          {selectedTab ? selectedTab.content : 'Please select a tab'}
        </div>
      </div>
    </div>
  );
};
