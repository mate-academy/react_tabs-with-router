import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { tabs } from '../App';

type ContentProps = React.FC<RouteComponentProps<{ id: string }>>;

const Content: ContentProps = ({ match }) => {
  const idValidation = () => {
    return tabs.some((tab) => tab.id === match.params.id);
  };

  const isTabExist = idValidation();

  return (
    <div className="content">
      {isTabExist ? match.params.id : 'Please select a tab'}
    </div>
  );
};

export default Content;
