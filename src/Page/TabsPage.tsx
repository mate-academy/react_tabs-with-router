import classNames from 'classnames';
import { useParams } from 'react-router-dom';
import { TabNavlink } from '../components/TabVanLinkj/TabNavLink';
import { tabs } from '../data';

export const TabsPage = () => {
  const { tabId = '' } = useParams();
  const selectedTab = tabs.find(tab => tab.id === tabId) || null;

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={classNames({ 'is-active': tab.id === tabId })}
            >
              <TabNavlink to={`../${tab.id}`} text={tab.title} isActive={tab.id === tabId} />
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab
          ? (
            selectedTab.content
          ) : (
            'Please select a tab'
          )}
      </div>
    </>
  );
};
