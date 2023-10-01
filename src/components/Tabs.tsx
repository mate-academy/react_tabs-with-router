import { Link, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';

type TabsProps = {
  tabs: Tab[];
};

export const Tabs = ({
  tabs,
}: TabsProps) => {
  const { tabId } = useParams();
  const selectedTab = tabs
    .find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                className={selectedTab?.id === tab.id ? 'is-active' : ''}
                data-cy="Tab"
                key={tab.id}
              >
                <Link
                  to={`/tabs/${tab.id}`}
                  data-cy="TabLink"
                >
                  {tab.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="block" data-cy="TabContent">
          {!selectedTab ? 'Please select a tab' : selectedTab.content}
        </div>
      </div>

    </>
  );
};
