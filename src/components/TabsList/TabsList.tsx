import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';
import { memo } from 'react';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[]
};

export const TabsList:React.FC<Props> = memo(({ tabs }) => {
  const { tabId } = useParams();

  const findSelectedTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={classNames({ 'is-active': tab.id === tabId })}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {findSelectedTab
          ? (findSelectedTab.content)
          : ('Please select a tab')}
      </div>
    </>
  );
});
