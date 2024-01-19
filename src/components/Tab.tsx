import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { tabs } from './TabsPage';
import { Tab as TTab } from '../types/Tab';

export const Tab = () => {
  const { tabName } = useParams();

  const [content, setContent] = useState<TTab | null>(null);

  useEffect(() => {
    const tab = tabs.find(el => el.id === tabName) || null;

    setContent(tab);
  }, [tabName]);

  return content ? (
    <>
      <p>{content.content}</p>
    </>
  ) : (<p>Please select a tab</p>);
};
