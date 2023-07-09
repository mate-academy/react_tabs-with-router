import cn from 'classnames';
import { Link } from 'react-router-dom';
import { Tab } from '../types/Tab';

interface Props {
  tab: Tab;
  selectedTabId: string
}

export const TabInfo: React.FC<Props> = ({ tab, selectedTabId }) => {
  const isSelected = (currentTab: Tab) => currentTab.id === selectedTabId;

  return (
    <>
      <li
        data-cy="Tab"
        className={cn({ 'is-active': isSelected(tab) })}
      >
        <Link to={`../${tab.id}`}>{tab.title}</Link>
      </li>
    </>
  );
};
