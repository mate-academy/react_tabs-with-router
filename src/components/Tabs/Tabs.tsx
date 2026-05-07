import { NavLink, useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const Tabs: React.FC = () => {
  const { tabId } = useParams();

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }) => {
            return (
              <li
                key={id}
                className={id === tabId ? 'is-active' : ''}
                data-cy="Tab"
              >
                <NavLink to={`../${id}`} data-cy="TabLink">
                  {title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.find(tab => tab.id === tabId)?.content ?? 'Please select a tab'}
      </div>
    </>
  );
};
