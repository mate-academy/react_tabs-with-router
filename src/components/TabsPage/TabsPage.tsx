import cn from 'classnames';

import { Link, useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
};

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();

  const activeTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div>
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(({ id, title }) => (
              <li
                key={id}
                data-cy="Tab"
                className={cn({
                  'is-active': id === tabId,
                })}
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
    </>
  );
};
