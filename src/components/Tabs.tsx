import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[]
};

export const Tabs: React.FC<Props> = ({ tabs }) => {
  const params = useParams();

  const { id } = params;

  return (
    <>
      <h1>Tabs</h1>
      <div>
        <div>
          <ul className="tab">
            {tabs.map(tab => (
              <Link
                className={tab.id === id
                  ? 'tab__link tab__link--selected' : 'tab__link'}
                key={tab.id}
                to={`/tabs/${tab.id}`}
              >
                {tab.title}
              </Link>
            ))}
          </ul>
        </div>
        <p className="tab__link__text">
          {tabs.find(tab => tab.id === id)?.content || 'Please select a tab'}
        </p>
      </div>
    </>

  );
};
