import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
};

export const Tabs: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();

  const selectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <div className="section">
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul className="tabs__list">
          {tabs.map(tab => (
            <li
              className={classNames(
                'tabs__tab',
                { 'is-active': selectedTab?.id === tab.id },
              )}
              key={tab.id}
            >
              <Link to={`/tabs/${tab.id}`}>
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="tab-content">
        {selectedTab !== undefined
          ? selectedTab.content : 'Please select a tab'}
      </div>
    </div>
  );
};
