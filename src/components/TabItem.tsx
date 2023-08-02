import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Tab } from '../types/Tab';

type Props = {
  tab: Tab;
  selectedTab: Tab | null;
};

export const TabItem = ({ tab, selectedTab }: Props) => {
  return (
    <>
      <li
        data-cy="Tab"
        className={classNames({ 'is-active': tab.id === selectedTab?.id })}
      >
        <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
      </li>
    </>
  );
};
