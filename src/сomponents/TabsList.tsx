import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { tabs } from '../tabs';
import { TabsContent } from './TabsContent';

export const TabsList = () => {
  const { tabId } = useParams();

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                data-cy="Tab"
                className={classNames({
                  'is-active': tab.id === tabId,
                })}
                key={tab.id}
              >
                <Link to={`${tab.id}`}>
                  {tab.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <TabsContent />
    </>
  );
};
