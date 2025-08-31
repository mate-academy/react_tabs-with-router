import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { TabContext } from '../store/TabContext';
import { TabContent } from './TabContent';

export const Tabs = () => {
  const { tabs } = useContext(TabContext);
  const { tabId } = useParams();

  return (
    <div>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={tabId === tab.id ? 'is-active' : ''}
              data-cy="Tab"
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <TabContent />
    </div>
  );
};
