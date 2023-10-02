/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { Dispatch, SetStateAction } from 'react';
import { Tab } from '../types/Tab';

type Props = {
  tab: Tab,
  setTabId: Dispatch<SetStateAction<string | undefined>>;
  settedTabId: string | undefined,
};

export const TabItem: React.FC<Props> = ({
  tab,
  setTabId,
  settedTabId,
}) => {
  return (
    <>
      <li
        data-cy="Tab"
        className={cn({
          'is-active': settedTabId === tab.id,
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
