import cn from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';

interface Props {
  tab: Tab
}

export const TabItem: React.FC<Props> = ({ tab }) => {
  const { tabId } = useParams();

  return (
    <>
      <li
        data-cy="Tab"
        className={cn({ 'is-active': tabId === tab.id })}
        key={tab.id}
      >
        <Link to={tab.id}>{tab.title}</Link>
      </li>
    </>
  );
};
