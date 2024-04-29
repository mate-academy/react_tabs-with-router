import React, { useContext } from 'react';
import { Tab } from '../types/Tab';
import { NavLink, useParams } from 'react-router-dom';
import cn from 'classnames';
import { DispatchContext } from '../reducer/Reducer';

interface Props {
  tab?: Tab;
}

export const TabItem: React.FC<Props> = ({ tab }) => {
  const dispatch = useContext(DispatchContext);
  const { tabId } = useParams();

  return (
    <li data-cy="Tab" className={cn({ 'is-active': tabId === tab?.id })}>
      <NavLink
        onClick={() =>
          dispatch({ type: 'setTab', currentTab: tab?.content || '111' })
        }
        to={`${tab?.id}`}
      >
        {tab?.title}
      </NavLink>
    </li>
  );
};
