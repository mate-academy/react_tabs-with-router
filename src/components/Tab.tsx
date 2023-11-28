import classnames from 'classnames';
import { NavLink, useParams } from 'react-router-dom';
import { Tab as TabType } from '../types/Tab';

type Props = {
  tab: TabType;
};

export const Tab: React.FC<Props> = ({ tab }) => {
  const { tabId } = useParams();

  return (
    <li data-cy="Tab" className={classnames({ 'is-active': tabId === tab.id })}>
      <NavLink
        to={`../${tab.id}`}
      >
        {tab.title}
      </NavLink>
    </li>
  );
};
