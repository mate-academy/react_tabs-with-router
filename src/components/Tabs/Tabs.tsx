import { Link } from 'react-router-dom';
import { Tab } from '../../types/Tab';

type Props = {
  tab: Tab;
  currentTabId: string | undefined;
};

export const Tabs: React.FC<Props> = ({ tab, currentTabId }) => {
  const { id, title } = tab;

  return (
    <li
      data-cy="Tab"
      key={id}
      className={id === currentTabId ? 'is-active' : ''}
    >
      {currentTabId ? (
        <Link to={`../${tab.id}`}>{title}</Link>
      ) : (
        <Link to={tab.id}>{title}</Link>
      )}
    </li>
  );
};
