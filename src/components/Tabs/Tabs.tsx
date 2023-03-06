import { FC } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
  selectedTab: string | undefined;
};

export const Tabs: FC<Props> = ({ tabs, selectedTab }) => {
  const isSelected = (tab: Tab) => tab.id === selectedTab;

  return (
    <ul className="tabs is-boxed">
      {tabs.map(tab => (
        <li
          data-cy="Tab"
          key={tab.id}
          className={classNames({ 'is-active': isSelected(tab) })}

        >
          <Link to={`../${tab.id}`}>{tab.title}</Link>
        </li>
      ))}
    </ul>
  );
};
