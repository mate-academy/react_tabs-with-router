import React from 'react';

export interface TabProps {
  title: string
}

export const Tab = ( props: TabProps ) => (
  <div className="container">
    <h1 className="title is-4">
      {props.title}
    </h1>
  </div>
);
