import React from 'react';
import { Tab } from '../types/Tab';
import { Link, useParams } from 'react-router-dom';
import TabContent from '../components/TabContent';

type Props = {
  tabs: Tab[];
};

export const Tabs: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();
  const findID: Tab | undefined = tabs.find(el => tabId === el.id);

  return (
    <div data-cy="TabsComponent">
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tb => (
            <li
              key={tb.id}
              data-cy="Tab"
              className={`${tabId === tb.id ? 'is-active' : ''}`}
            >
              <Link to={`/tabs/${tb.id}`} data-cy="TabLink">
                {tb.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <TabContent content={findID?.content} />
    </div>
  );
};

export default Tabs;
