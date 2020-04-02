import React, { FC } from 'react';
import { WithRouterAbout } from './About';

interface Props {
  content: string;
}
export const TabsItem: FC<Props> = ({ content }) => (
  <div className="jumbotron">
    <h1>{content}</h1>
    <hr />
    <WithRouterAbout text={content} />
  </div>
);
