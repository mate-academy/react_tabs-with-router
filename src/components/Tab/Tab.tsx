import React from 'react';

export interface TabProps {
  isActive: boolean;
  title: string;
  id: string;
  setActiveTabId: (id: string) => void
}

export const Tab: React.FC<TabProps> = React.memo(({
  isActive,
  title,
  id,
  setActiveTabId,
}) => {
  const handleTabClick = () => {
    setActiveTabId(id);
  };

  return (
    <li className={isActive ? 'is-active' : ''} data-cy="Tab">
      <a href={`#${id}`} data-cy="TabLink" onClick={handleTabClick}>
        {title}
      </a>
    </li>
  );
});
