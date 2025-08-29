import { Link, useParams } from 'react-router-dom';
import { Tab as TabType } from '../types/Tab';

interface TabsProps {
  tabs: TabType[];
}

export const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const { tabId } = useParams();

  const activateTab = tabs.find(tab => tabId === tab.id);

  return (
    <>
      <div className="section">
        <h1 className="title">
          {activateTab ? `Selected tab is ${activateTab.title}` : 'Tabs Page'}
        </h1>
        <div data-cy="TabsComponent">
          <div className="tabs is-boxed">
            <ul>
              {tabs.map(tab => (
                <li
                  key={tab.id}
                  data-cy="Tab"
                  className={tabId === tab.id ? 'is-active' : ''}
                >
                  <Link
                    to={`/tabs/${tab.id}`}
                    className={tabId === tab.id ? 'is-active' : ''}
                  >
                    {tab.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      (
      <div className="block" data-cy="TabContent">
        {!activateTab ? 'Please select a tab' : activateTab.content}
      </div>
    </>
  );
};
