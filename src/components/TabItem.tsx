/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { Tab } from '../types/Tab';

type Props = {
  tab: Tab,
  tabId: string,
  setTabId: (arg0: string) => void,
};

export const TabItem: React.FC<Props> = ({ tab, tabId, setTabId }) => {
  return (
    <>
      <li
        data-cy="Tab"
        className={cn({
          'is-active': tabId === tab.id,
        })}
        onClick={(e) => {
          e.preventDefault();
          setTabId(tab.id);
        }}
      >
        <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
      </li>
    </>
  );
};
