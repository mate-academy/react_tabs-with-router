import classNames from 'classnames';
import { useParams } from 'react-router-dom';
import { tabs } from '../../App';
import { Tab } from '../../types/Tab';
import { TabLink } from '../TabLink';

export const TabsSection: React.FC = () => {
  const { tabId = '' } = useParams();

  const getTabContent: Tab | undefined = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                key={tab.id}
                data-cy="Tab"
                className={classNames({ 'is-active': tabId === tab.id })}
              >
                <TabLink tab={tab} />
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {!tabId.length ? (
          'Please select a tab'
        ) : (
          getTabContent?.content
        )}
      </div>
    </>
  );
};
