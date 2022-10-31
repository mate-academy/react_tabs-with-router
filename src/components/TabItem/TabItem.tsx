import classNames from 'classnames';
import { Tab } from '../../types/Tab';
import { TabLink } from '../TabLink';

type Props = {
  tab: Tab,
  selectedTab: string,
};

export const TabItem: React.FC<Props> = ({ tab, selectedTab }) => {
  const isSelected = tab.id === selectedTab;

  return (
    <li
      data-cy="Tab"
      className={classNames({
        'is-active': isSelected,
      })}
    >

      <TabLink
        to={tab.id}
        name={tab.title}
      />
    </li>
  );
};
