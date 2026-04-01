import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { TabsContext } from '../context/TabsContext';
import classNames from 'classnames';

export const TabsPage: React.FC = () => {
  const tabs = useContext(TabsContext);
  const { tabId } = useParams();

  const idMatch = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={classNames('', { 'is-active': tab.id === tabId })}
            >
              <Link to={`/tabs/${tab.id}`}>{`${tab.title}`}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {idMatch ? `${idMatch.content}` : 'Please select a tab'}
      </div>
    </>
  );
};
