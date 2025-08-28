import { Link, useParams } from 'react-router-dom';
import { TabsContent } from './TabsContent';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[];
};
export const TabsPage = ({ tabs }: Props) => {
  const { tabId } = useParams();

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>

        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => {
              return (
                <li
                  data-cy="Tab"
                  className={tabId === tab.id ? 'is-active' : undefined}
                  key={tab.id}
                >
                  <Link to={tab.id}>{tab.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          <TabsContent tabs={tabs} />
        </div>
      </div>
    </div>
  );
};
