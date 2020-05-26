import React, { useMemo } from 'react';
import { NavLink, Redirect } from 'react-router-dom';

type Props = {
  curId: string;
  list: TabItem[];
};

export const Tabs: React.FC<Props> = ({ curId, list }) => {
  const currentTabIndex: number = useMemo(() => {
    return list.findIndex(item => item.id === curId);
  }, [list, curId]);

  const defaultTabId = list[0].id;

  if (!curId) {
    return (
      <Redirect to={`/tabs/${defaultTabId}`} />
    );
  }

  return (
    <>
      <h2>Tabs</h2>
      <ul>
        {
          list.map(item => (
            <li>
              <NavLink to={`/tabs/${item.id}`}>
                {item.title}
              </NavLink>
            </li>
          ))
        }
      </ul>
      <div>{list[currentTabIndex].content}</div>
    </>
  );
};
