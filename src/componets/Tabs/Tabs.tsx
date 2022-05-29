import React, { useEffect } from 'react';
import {
  useParams,
  NavLink,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import { Tab } from '../../types/tabs';
import './Tabs.scss';

type Props = {
  tabs: Tab[];
};

export const Tabs: React.FC<Props> = React.memo(({
  tabs,
}) => {
  const { tabId } = useParams<{ tabId: string }>();
  const navigate = useNavigate();
  const activeTab = tabs.find(tab => tab.id === tabId);
  const url = useLocation();

  useEffect(() => {
    if (!activeTab && tabs.length) {
      navigate(`${url.pathname}/${tabs[0].id}`);
    }
  }, []);

  return (
    <div className="Tabs">
      <ul className="Tabs__list">
        {
          tabs.map(tab => (
            <li key={tab.id} className="Tabs__item">
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? '#fff' : '#006064',
                  border: isActive ? '1ps solid #006064' : '#f0f0f0',
                  pdding: isActive ? '5px' : '0',
                })}
                className="Tabs__link"
                to={`/tabs/${tab.id}`}
              >
                {tab.title}
              </NavLink>
            </li>
          ))
        }
      </ul>

      {activeTab && (
        <p className="Tabs__content">
          {activeTab.content}
        </p>
      )}
    </div>
  );
});
