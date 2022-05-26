import { FC } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import './Tabs.scss';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.' }, // eslint-disable-line
  { id: 'tab-2', title: 'Tab 2', content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.' }, // eslint-disable-line
  { id: 'tab-3', title: 'Tab 3', content: 'The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.' }, // eslint-disable-line
];

export const Tabs: FC = () => {
  const { tabId } = useParams<{ tabId: string }>();
  const current = tabs.find(tab => tab.id === tabId);

  return (
    <div className="Tabs">
      <h1>
        Tabs
      </h1>

      <ul className="Tabs__list">
        {tabs.map(tab => (
          <li
            key={tab.id}
            className="Tabs__item"
          >
            <NavLink
              to={`/tabs/${tab.id}`}
              className={
                ({ isActive }: { isActive: boolean }): string | undefined => {
                  return isActive
                    ? 'App__navigation-link tab active '
                    : 'App__navigation-link tab';
                }
              }
            >
              {tab.title}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="Tabs__content">
        {current && (
          <p>
            {current.content}
          </p>
        )}
      </div>
    </div>
  );
};
