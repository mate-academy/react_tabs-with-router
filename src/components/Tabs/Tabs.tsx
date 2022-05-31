import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';

import './Tabs.scss';

type Props = {
  tabs: Tab[]
};

export const Tabs: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();
  const [selectedTab, setCurrentTab] = useState<Tab | null>(null);
  const [isIdValid, setIsIdValid] = useState(false);

  useEffect(() => {
    const tab = tabs.find(elem => elem.id === tabId) || null;

    setCurrentTab(tab);

    return tab ? setIsIdValid(true) : setIsIdValid(false);
  }, [tabId]);

  return (
    <div className="tabs">
      {tabs.map(tab => (
        <Link
          key={tab.id}
          to={`/tabs/${tab.id}`}
          className={classNames('tab__button',
            { 'tab__button-active': tab.id === selectedTab?.id })}
        >
          {tab.title}
        </Link>
      ))}

      {!isIdValid && <p>Please select a tab</p>}

      {selectedTab && (
        <div className="tab__content">
          {selectedTab.title}
        </div>
      )}
    </div>
  );
};
