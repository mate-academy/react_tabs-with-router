import cn from 'classnames';
import { Link } from 'react-router-dom';
import { Tab } from '../../types/Tab';

type Props = {
  tab: Tab,
  tabId: string,
};

export const TabItem: React.FC<Props> = ({ tab, tabId }) => {
  const {
    title,
    id,
  } = tab;

  const isTabActive = tabId === id;

  return (
    <li data-cy="Tab" className={cn({ 'is-active': isTabActive })}>
      <Link to={`../${id}`}>{title}</Link>
    </li>
  );
};
