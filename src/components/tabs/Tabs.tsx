import 'bulma/css/bulma.css';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';
import { tabs } from '../../data/tabs';

export const Tabs = () => {
  const { tabId } = useParams();
  const selectedTabId = tabId || null;

  const getContentById = (id: string | null) => {
    const foundTab = tabs.find(tab => tab.id === id);

    return foundTab ? foundTab.content : 'Please select a tab';
  };

  const tabContent = getContentById(selectedTabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={classNames({
                'is-active': tab.id === tabId,
              })}
              data-cy="Tab"
              key={tab.id}
            >
              <Link to={`/tabs/${tab.id}`}>
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabContent}
      </div>
    </>
  );
};
