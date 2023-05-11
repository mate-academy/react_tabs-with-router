import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { Tab } from '../../types/Tab';

interface Props {
  tabs: Tab[]
  selectedTab: Tab | null;
}
export const Tabs: FC<Props> = memo(({ tabs, selectedTab }) => {
  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            key={tab.id}
            data-cy="Tab"
            className={cn({ 'is-active': selectedTab?.id === tab.id })}
          >
            <Link
              to={`../${tab.id}`}
              data-cy="TabLink"
            >
              {tab.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
});
