import { Link, useParams } from 'react-router-dom';
import { tabs } from '../App';
import cn from 'classnames';

export const TabsPage = () => {
  const { tabID } = useParams();
  const selectedTab = tabs.find(tab => tab.id === tabID);
  const content = selectedTab ? selectedTab.content : 'Please select a tab';

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const isSelected = tabID === tab.id;

            return (
              <li
                data-cy="Tab"
                className={cn({ 'is-active': isSelected })}
                key={tab.id}
              >
                <Link to={tab.id}>{tab.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {content}
      </div>
    </>
  );
};
