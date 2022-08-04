import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[];
};

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const [selectedTab, setSelectedTab] = useState<null | Tab>(null);
  const { tabId } = useParams();

  useEffect(() => {
    const foundTab = tabs.find(el => el.id.split('-')[1] === tabId);

    if (foundTab) {
      setSelectedTab(foundTab);
    }
  }, [tabId]);

  return (
    <div className="TabsPage">
      {
        selectedTab
          ? (
            <h1 className="title">{`Tabs page ${selectedTab.id.split('-')[1]}`}</h1>
          ) : (
            <h1 className="title">Select tab</h1>
          )
      }
      <div className="tabs is-boxed">
        <ul>
          {
            tabs.map(el => {
              const id = el.id.split('-')[1];

              return (
                <li
                  data-cy="tab"
                  className={tabId === id ? 'is-active' : ''}
                  key={id}
                >
                  <Link className="link" to={`/tabs/${id}`}>
                    {`Tab ${id}`}
                  </Link>
                </li>
              );
            })
          }
        </ul>
      </div>
      {
        selectedTab
          ? (
            <div className="block" data-cy="tab-content">
              {selectedTab.content}
            </div>
          ) : (
            <div className="block" data-cy="tab-content">
              Please select a tab
            </div>
          )
      }
    </div>
  );
};
