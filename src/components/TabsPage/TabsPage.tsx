import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';
import { tabs } from '../tabs';

export const TabsPage = () => {
  const { tabId = 0 } = useParams();
  const isSelected = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              className={classNames({
                'is-active': isSelected
                && isSelected.id === tab.id,
              })}
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
        {isSelected
          ? isSelected.content
          : 'Please select a tab'}
      </div>
    </>
  );
};
