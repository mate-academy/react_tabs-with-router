import cn from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { Tab } from './types/Tab';

type Props = {
  tabs: Tab[];
};

export const Tabs: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();
  const selectedTab = tabs.find((tab) => tab.id === tabId);

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>
        <div data-cy="TabsComponent">
          <div className="tabs is-boxed">
            <ul>
              {tabs.map((tab) => (
                <li
                  className={cn({ 'is-active': tab.id === tabId })}
                  data-cy="Tab"
                  key={tab.id}
                >
                  <Link to={`/tabs/${tab.id}`} data-cy="TabLink">
                    {tab.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="block" data-cy="TabContent">
            {selectedTab ? selectedTab.content : 'Please select a tab'}
          </div>
        </div>
      </div>
    </div>
  );
};
