import React from 'react';
import { NavLink } from 'react-router-dom';

const tabs = [
  {
    id: 'tab-1',
    title: 'Tab 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium atque dolore, expedita fuga inventore ipsa\n'
      + '      itaque magnam nostrum officia pariatur quos rerum saepe sequi tempora ullam unde voluptatem. Molestias,\n'
      + '      voluptatum!',
  },
  {
    id: 'tab-2',
    title: 'Tab 2',
    content: 'Atque consequatur culpa cum delectus deserunt dicta expedita hic inventore itaque minima molestias nemo neque,\n'
      + '      nihil nisi officia officiis pariatur porro reiciendis sint sit soluta tenetur, vel velit voluptas voluptatem',
  },
  {
    id: 'tab-3',
    title: 'Tab 3',
    content: 'Animi, nisi, unde. Beatae blanditiis debitis deserunt eum, explicabo illum maxime minus nihil praesentium quidem\n'
      + '      quisquam rem reprehenderit soluta suscipit voluptatum? Eos exercitationem magni omnis, pariatur similique ut\n'
      + '      voluptas? Laudantium',
  },
];

const TabsPage = ({ tabsId }: MatchProps) => {
  const currentTab = tabs.find(tab => tab.id === tabsId) || { content: '' };

  return (
    <>
      <h2 className="tabs__head">Tabs</h2>
      <ul className="tabs__list">
        {tabs.map(tab => (
          <li className="tabs__item" key={tab.id}><NavLink to={`/tabs/${tab.id}`} className="tabs__link">{tab.title}</NavLink></li>
        ))}
      </ul>
      <h3 className="tabs__text">
        {currentTab.content}
      </h3>
    </>
  );
};

export default TabsPage;
