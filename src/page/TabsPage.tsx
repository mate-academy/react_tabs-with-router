import cn from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { tabs } from '../date/tabs';

export const TabsPage = () => {
  const { tabId } = useParams();
  const tabById = tabs.find((tab) => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }) => (
            <li
              key={id}
              data-cy="Tab"
              className={cn({ 'is-active': tabId === id })}
            >
              <Link to={`../${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabById ? tabById.content : 'Please select a tab'}
      </div>
    </>
  );
};
