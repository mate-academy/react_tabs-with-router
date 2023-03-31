import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';
import tabs from '../tabsData.json';
import { TabContent } from './TabContent';

export const TabsPage: React.FC = () => {
  const { tabId } = useParams();

  const tabContent = tabs.find(tab => tab.id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ title, id }) => (
            <li
              data-cy="Tab"
              className={classNames({ 'is-active': tabId === id })}
              key={id}
            >
              <Link to={`../${id}`} replace>{title}</Link>
            </li>
          ))}
        </ul>
      </div>
      {tabContent
        ? <TabContent text={tabContent.content} />
        : 'Please select a tab'}
    </>

  );
};
