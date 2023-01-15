import { FC, useContext } from 'react';
import cn from 'classnames';
import { Link, useParams } from 'react-router-dom';
import type { Tab } from '../../types/Tab';
import { TabsContext } from '../../context/TabsContext';

export const TabNavigation: FC = () => {
  const tabs = useContext(TabsContext)?.tabs as Tab[];

  const { tabId } = useParams<{ tabId: string }>();

  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map((tab) => (
          <li
            key={tab.id}
            className={cn({
              'is-active': tabId === tab.id,
            })}
          >
            <Link to={tab.id}>{tab.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
