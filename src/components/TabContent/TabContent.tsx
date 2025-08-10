import { Link } from 'react-router-dom';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
  activeTabID: string;
};

export const TabContent: React.FC<Props> = ({ tabs, activeTabID }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabID);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              className={tab.id === activeTabID ? 'is-active' : ''}
              key={tab.id}
            >
              <Link to={`/tabs/${tab.id}`} data-cy="TabLink">
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {activeTab ? (
        <div className="block" data-cy="TabContent">
          {activeTab.content}
        </div>
      ) : (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      )}
    </>
  );
};
