import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

type TabsPageProps = React.FC<RouteComponentProps<{ id: string }>>;

const Content: TabsPageProps = ({ match }) => {
  // const idValidation = () => {};

  return <div className="content">{match.params.id}</div>;
};

export default Content;
