import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';

type Props = {
  tab: Tab;
};

export const TabItem: React.FC<Props> = ({ tab }) => {
  const { tabId = '' } = useParams();
  const isSelected = tab.id === tabId;

  return (
    <li
      data-cy="Tab"
      className={classNames({
        'is-active': isSelected,
      })}
    >
      <Link to={`/tabs/${tab.id}`}>
        {tab.title}
      </Link>
    </li>
  );
};
