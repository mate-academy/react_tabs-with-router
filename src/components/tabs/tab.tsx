import React, { FC } from 'react';
import { Route } from 'react-router-dom';

interface Props {
  tab: Tabs;
}
export const Tab: FC<Props> = ({ tab }) => {
  return (
    <Route path={`/tabs/${tab.id}`}>
      <p>{tab.content}</p>
    </Route>
  );
};
