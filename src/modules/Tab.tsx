import React from 'react';
import { useParams } from 'react-router-dom';

interface Params {
  id: string;
}

interface Tab {
  id: string;
  title: string;
  content: string;
}

interface Props {
  tabs: Tab[];
}

export const Tab = ({ tabs }: Props) => {
  const params: Params = useParams();
  const text: Tab = tabs.find(tab => tab.id === params.id) as Tab;

  return (
    <div className="tab-content">
      {text.content}
    </div>
  );
};
