// Tabs.tsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface TabProps {
  children: React.ReactNode;
  activeTab?: string;
}

const Tabs: React.FC<TabProps> = ({ children, activeTab }) => {
  const [active, setActive] = useState(activeTab || '');
  const navigate = useNavigate();

  const handleTabClick = (tabId: string) => {
    setActive(tabId);
    navigate(`/tabs/${tabId}`);
  };

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {React.Children.map(children, (child: any) => (
            <li className={child.props.id === active ? 'is-active' : ''}>
              <Link to={`/tabs/${child.props.id}`} onClick={() => handleTabClick(child.props.id)}>
                {child.props.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {React.Children.map(children, (child: any) => (child.props.id === active
          ? child.props.children
          : null))}
      </div>
    </>
  );
};

export default Tabs;
