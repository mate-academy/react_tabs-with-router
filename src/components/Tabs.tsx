import { Link, useParams } from 'react-router-dom';
import { tabs } from '../App';
import classNames from 'classnames';

export const Tabs: React.FC = () => {
  const { tabId } = useParams();
  const tabIndex = tabs.findIndex(tab => tabId === tab.id);

  return (
    <>
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
        {tabIndex === -1 ? 'Please select a tab' : tabs[tabIndex].content}
      </div>
    </>
  );
};
