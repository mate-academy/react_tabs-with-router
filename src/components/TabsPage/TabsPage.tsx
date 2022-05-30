import { FC } from 'react';
import { useParams } from 'react-router-dom';

type Props = {
  tabs: Tab[];
};

export const TabsPage: FC<Props> = ({ tabs }) => {
  const { tabId } = useParams<{ tabId: string }>();
  const currentTab = tabs.find((tab: Tab) => tab.id === tabId) || null;

  return (
    <>
      <div className="tabs is-centered is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={tab === currentTab ? 'is-active' : 'tab'}
              key={tab.id}
            >
              <a href={`#/tabs/${tab.id}`}>{tab.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <span className="is-primary">{currentTab?.content}</span>
    </>

  );
};
