import React, { useContext } from "react";
import { Tab } from "../../types/Tab";
import { Link } from 'react-router-dom';
import { TabsContext } from '../../TabsContext';
import classNames from "classnames";

type Props = {
  tab: Tab,
}

export const TabItem: React.FC<Props> = ({ tab }) => {
  const { selTab, setSelTab } = useContext(TabsContext);

  return (
    <>
      <li data-cy="Tab" className={classNames('', {
        'is-active': selTab?.id === tab.id
      })}>
        <Link to={`/tabs/${tab.id}`} onClick={() => {
          setSelTab(tab);
        }}>{ tab.title }</Link>
      </li>
    </>
  )
}
