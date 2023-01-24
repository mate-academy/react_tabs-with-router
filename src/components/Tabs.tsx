import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Tab } from '../types/Tab';

export type Props = {
  tabs: Tab[],
  selectedTab: string,
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTab }) => {
  const findTab: Tab | undefined = tabs.find(item => item.id === selectedTab);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={classNames('',
                { 'is-active': selectedTab === tab.id })}
              data-cy="Tab"
              key={tab.id}
            >
              <Link
                to={`/tabs/${tab.id}`}
                data-cy="TabLink"
              >
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {findTab ? findTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
