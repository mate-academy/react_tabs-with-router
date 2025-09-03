import { Link, useParams } from 'react-router-dom';
import cn from 'classnames';
import { Tab } from '../api/type/Tab';
type Props = {
  tab: Tab;
};

export const TabItem: React.FC<Props> = ({ tab }) => {
  const { tabId } = useParams();

  return (
    <>
      <li data-cy="Tab" className={cn({ 'is-active': tab.id === tabId })}>
        <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
      </li>
    </>
  );
};
