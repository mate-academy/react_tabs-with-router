import { Link, useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';
import classNames from 'classnames';

type Props = {
  tabs: Tab[];
};

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();
  const selectedTabId = tabs.find(tab => tab.id === tabId);

  return (
    <div>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const isClassTabSelected = classNames({
              'is-active': tabId === tab.id,
            });

            return (
              <li key={tab.id} data-cy="Tab" className={isClassTabSelected}>
                <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTabId ? (
          <div>{selectedTabId.content}</div>
        ) : (
          'Please select a tab'
        )}
      </div>
    </div>
  );
};
