import classNames from 'classnames';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[],
  selectTabSlug: string | null
};

export const Tabs: FC<Props> = ({
  tabs, selectTabSlug,
}) => {
  const selectedTab = tabs.find(tab => tab.id === selectTabSlug);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={classNames(
                { 'is-active': selectTabSlug === tab.id },
              )}
            >
              <Link
                to={`../${tab.id}`}
              >
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab ? (selectedTab.content) : ('Please select a tab')}
      </div>
    </>
  );
};
