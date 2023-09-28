import { Link, useParams } from 'react-router-dom';
import cn from 'classnames';
import { tabs } from '../utils/tabs';

export const Tabs = () => {
  const { tabId } = useParams();
  const selectedTab = tabs.find(tab => tab.id === tabId) ?? tabs[0];
  const isValidTab = tabs.some(({ id }) => tabId === id);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              className={cn({
                'is-active': tabId === tab.id,
              })}
            >
              <Link to={`../${tab.id}`}>
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {isValidTab
          ? selectedTab.content
          : 'Please select a tab'}
      </div>
    </>
  );
};
