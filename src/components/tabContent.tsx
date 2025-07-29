import React from 'react';
import { Tab } from '../types/Tab';
import { useParams } from 'react-router-dom';
import './style.scss';

interface Props {
  t: Tab[];
}

export const TabContent: React.FC<Props> = ({ t }) => {
  const { tabId } = useParams();

  const correct = t.find((tab: Tab) => tab.id === tabId);

  if (!correct) {
    return (
      <div className="block" data-cy="TabContent">
        Please select a tab
      </div>
    );
  }

  return (
    <div className="block" data-cy="TabContent">
      {correct?.content}
    </div>
  );
};
