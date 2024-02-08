import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';
import { Tab } from './types/Tab';

interface TabsProps {
  tabs: Tab[]
}
export const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const { tabId } = useParams();
  const tabFinder = (tabid: string) => {
    return tabs.find(element => element.id === tabid);
  };

  return (
    <div>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={classNames({ 'is-active': tabId === tab.id })}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {(tabId && tabFinder(tabId))
          ? tabFinder(tabId)?.content : 'Please select a tab'}
      </div>
    </div>
  );
};
