import { Link, useParams } from 'react-router-dom';
import cn from 'classnames';
import { Tabs } from '../constants/Tabs';

export const TabsPage: React.FC = () => {
  const { tabId } = useParams();
  const tabText =
    Tabs.find(({ id }) => tabId === id)?.content || 'Please select a tab';

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {Tabs.map(tab => (
            <li
              data-cy="Tab"
              className={cn({ 'is-active': tabId === tab.id })}
              key={tab.id}
            >
              <Link to={`../${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {tabText}
      </div>
    </>
  );
};
