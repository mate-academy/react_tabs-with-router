import { Link, useParams } from 'react-router-dom';

import classNames from 'classnames';

type Props = {};

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export default function Tabs({}: Props) {
  const { tabId } = useParams();
  const chosenTab = tabs.find(({ id }) => id === tabId);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ title, id }) => (
            <li
              key={id}
              data-cy="Tab"
              className={classNames({ 'is-active': id === tabId })}
            >
              <Link to={'/tabs/' + id}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {chosenTab !== undefined ? chosenTab.content : 'Please select a tab'}
      </div>
    </>
  );
}
