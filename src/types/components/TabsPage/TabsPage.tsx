import classNames from 'classnames';
import { useParams } from 'react-router-dom';
import { Tab } from '../../Tab';
import { PageNavLink } from '../PageNavLink/PageNavLink';

type Props = {
  tabs: Tab[]
};

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId = '' } = useParams();
  const currentTab = tabs.find(tab => tab.id === tabId) || null;

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={classNames({ 'is-active': tabId === tab.id })}
            >
              <PageNavLink
                to={`../${tab.id}`}
                title={tab.title}
              />
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {currentTab ? currentTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
