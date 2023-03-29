import { useMemo } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import cn from 'classnames';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
};

const Tabs: React.FC<Props> = ({ tabs }) => {
  const { tabId = 0 } = useParams();
  const foundTab = useMemo(() => {
    return tabs.find(tab => tab.id === tabId) || null;
  }, [tabId]);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={cn({ 'is-active': tabId === tab.id })}
            >
              <NavLink to={`../${tab.id}`}>
                {tab.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {foundTab?.content || 'Please select a tab'}
      </div>
    </>
  );
};

export default Tabs;
