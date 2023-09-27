import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';
import { tabs } from '../../api/tabs';

export const TabsPage = () => {
  const { tabId } = useParams();
  const isTabIdValid = tabs.some(({ id }) => tabId === id);
  const currentTab = tabs.find(tab => tab.id === tabId) ?? tabs[0];

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              className={classNames({
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
        {isTabIdValid
          ? currentTab.content
          : 'Please select a tab'}
      </div>
    </>
  );
};
