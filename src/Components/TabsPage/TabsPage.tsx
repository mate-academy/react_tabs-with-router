import { useParams, Link } from 'react-router-dom';
import cn from 'classnames';
import { tabs } from '../../Tabs/Tabs';

export const TabsPage = () => {
  const { tabsId } = useParams();

  const selectedTab = tabs.find(tab => tab.id === tabsId);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              className={cn({ 'is-active': selectedTab?.id === tab.id })}
            >
              <Link to={`/tabs/${tab.id}`} key={tab.id}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {selectedTab ? selectedTab.content : ('Please select a tab')}
      </div>
    </>
  );
};
