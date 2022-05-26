import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './Tabs.scss';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage: React.FC = () => {
  const { tabId } = useParams<{ tabId: string }>();
  const navigate = useNavigate();
  const activeTab = tabs.find(tab => tab.id === tabId);

  useEffect(() => {
    if (!activeTab && tabs.length) {
      navigate(`/tabs/${tabs[0].id}`);
    }
  }, []);

  return (
    <div>
      <ul className="list">
        {
          tabs.map(tab => (
            <li key={tab.id} className="list__item">
              <Link
                to={`/tabs/${tab.id}`}
              >
                {tab.title}
              </Link>
            </li>
          ))
        }
      </ul>

      {activeTab && (
        <p className="Tab__content">
          {activeTab.content}
        </p>
      )}
    </div>
  );
};
