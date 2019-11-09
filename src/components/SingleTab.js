import React from 'react';

function SingleTab({ onTabSelected, title, active }) {
  return (
    <div onClick={onTabSelected}
         className={active ? 'item active' : 'item'}>
      {title}
    </div>
  );
}

export default SingleTab;
