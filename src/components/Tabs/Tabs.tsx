import cn from 'classnames';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const Tabs: React.FC = () => {
  const [tabContent, setTabContent] = useState('Please select a tab');
  const { tabID } = useParams();

  const linkHandler = (content: string) => {
    setTabContent(content);
  };

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title, content }) => (
            <li
              key={id}
              data-cy="Tab"
              className={cn({ 'is-active': id === tabID })}
            >
              <Link
                to={`../${id}`}
                onClick={() => linkHandler(content)}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {tabContent}
      </div>
    </>
  );
};
