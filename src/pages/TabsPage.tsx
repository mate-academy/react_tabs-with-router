import { Link, useParams } from 'react-router-dom';
import cn from 'classnames';
import { tabs } from '../App';

export const TabsPage = () => {
  const { tabId } = useParams();

  const content = tabs.find(tab => tab.id === tabId)?.content;

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">

        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={cn({
                'is-active': tabId === tab.id,
              })}
            >
              <Link to={`/tabs/${tab.id}`}>
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {!content ? (
          'Please select a tab'
        ) : (
          content
        )}
      </div>
    </>
  );
};
