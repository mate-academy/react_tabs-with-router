import React from 'react';
import { Tab } from '../../types/Tab';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

type Props = {
  tabs: Tab[];
};

const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();
  const activeTab = Number(tabId?.match(/\d+/));
  let paramFound = true;

  if (activeTab === 0) {
    paramFound = false;
  }

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>

        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                data-cy="Tab"
                className={tabId === tab.id ? 'is-active' : ''}
                key={tab.id}
              >
                <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {paramFound && activeTab <= tabs.length
            ? tabs[activeTab - 1].content
            : 'Please select a tab'}
        </div>
      </div>
    </div>
  );
};

export default TabsPage;
