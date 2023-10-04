import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { tabs } from '../../helpers/Tabs';

export const TabsPage = () => {
  const { tabId } = useParams();

  const currentTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const { id, title } = tab;

            return (
              <li
                key={id}
                data-cy="Tab"
                className={classNames({ 'is-active': tabId === tab.id })}
              >
                <Link to={`../${id}`}>{title}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {currentTab ? (
          `${currentTab?.content}`
        ) : (
          'Please select a tab'
        )}
      </div>
    </>
  );
};
