import React, { useState, useEffect } from 'react';
import './TabContent.scss';
import { useParams } from 'react-router-dom';

interface Tab {
  id: string,
  title: string,
  content: string,
}

type Props = {
  tabs: Tab[],
  onSelect: (arg: string | undefined) => void
};

export const TabContent: React.FC<Props> = ({ tabs, onSelect }) => {
  const { tabId } = useParams<{ tabId: string }>();

  const [content, setContent] = useState<string>('');

  useEffect((() => {
    const visibleTab = tabs.find(tab => tab.id === tabId);

    if (visibleTab) {
      setContent(visibleTab.content);
      onSelect(tabId);
    }
  }),
  [tabId]);

  useEffect(() => {
    return () => {
      onSelect('');
    };
  }, []);

  return (
    <p className="content">{content}</p>
  );
};
