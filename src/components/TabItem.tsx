import { Link, useParams } from 'react-router-dom';
import cn from 'classnames';
import { Tab } from '../types/Tab';

interface Props {
  tab: Tab;
}

export const TabItem: React.FC<Props> = ({ tab }) => {
  const { id, title } = tab;
  const { tabId } = useParams();

  return (
    <li data-cy="Tab" className={cn({ 'is-active': tabId === tab.id })}>
      <Link to={`/tabs/${id}`}>{title}</Link>
    </li>
  );
};
