import { Link, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[];
};

export const Tabs: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();

  const index = tabId?.substring(tabId.length - 1) || 0;

  return (
    <div className="section">
      <h1 className="title">Tabs page</h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                className={tabId === tab.id ? 'is-active' : ''}
                data-cy="Tab"
                key={tab.id}
              >
                {tabId === tab.id ? (
                  <Link
                    to="/tabs"
                    data-cy="TabLink"
                  >
                    {tab.title}
                  </Link>
                ) : (
                  <Link
                    to={`/tabs/${tab.id}`}
                    data-cy="TabLink"
                  >
                    {tab.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {+index > tabs.length || index === 0 ? (
          <div className="block" data-cy="TabContent">
            Please select a tab
          </div>
        ) : (
          <div className="block" data-cy="TabContent">
            {tabs[+index - 1]?.content}
          </div>
        )}
      </div>
    </div>
  );
};
