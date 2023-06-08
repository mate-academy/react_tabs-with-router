import classNames from 'classnames';
import { FC, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
};

export const TabsPage: FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();
  const [isSelected, setSelected] = useState(true);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              className={classNames({ 'is-active': tabId === tab.id })}
              key={tab.id}
            >
              <Link
                to={`/tabs/${tab.id}`}
                onClick={() => setSelected(false)}
              >
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {isSelected
          ? 'Please select a tab'
          : `Some text ${tabId?.slice(-1)}`}
      </div>
    </>
  );
};
