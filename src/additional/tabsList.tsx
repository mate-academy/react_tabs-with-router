import React, { useEffect, useState } from 'react';
import { NavLink, Route, RouteComponentProps } from 'react-router-dom';
import { Tab } from './interface';


const tabs: Tab[] = [
  {
    id: 'iphone',
    title: 'iPhone',
    content: 'The iPhone is a line of touchscreen-based smartphones designed and marketed by Apple Inc. All generations of the iPhone use Apple\'s iOS mobile operating system software. The first-generation iPhone was released on June 29, 2007, and multiple new hardware iterations with new iOS releases have been released since.',
  },
  {
    id: 'samsung',
    title: 'SAMSUNG',
    content: 'Samsung Galaxy (stylised as SAMSUNG Galaxy since 2015, previously stylised as Samsung GALAXY) is a series of computing and mobile computing devices designed, manufactured and marketed by Samsung Electronics. The product line includes the Samsung Galaxy S series of high-end smartphones, the Samsung Galaxy Tab series of tablets, the Samsung Galaxy Note series of tablets and phablets with the added functionality of a stylus, and smartwatches including the first version of the Samsung Galaxy Gear, with later versions dropping the Galaxy branding, until the release of the Samsung Galaxy Watch in 2018.',
  },
  {
    id: 'nokia',
    title: 'NOKIA',
    content: 'The Nokia 3310 is a GSM mobile phone announced on 1 September 2000, and released in the fourth quarter of the year, replacing the popular Nokia 3210. It sold very well, being one of the most successful phones with 126 million units sold worldwide, and being one of Nokia\'s most iconic devices. The phone is still widely acclaimed and has gained a cult status due to its durability. Several variants of the 3310 have been released, including the Nokia 3315, 3320, 3330, 3350, 3360, 3390 and 3395.',
  },
];

type Params = { tabId: string };
type Props = React.FC<RouteComponentProps<Params>>;

export const TabsList: Props = ({ match }) => {
  const [description, setDescription] = useState('');

  const handleTabClick = (content: string) => {
    setDescription(content);
  };


  const { tabId } = match.params;
  const activeTab = tabs.find(tab => tab.id === tabId);

  useEffect(() => {
    if (activeTab !== undefined) {
      setDescription(activeTab.content);
    } else {
      setDescription('No tab selected yet');
    }
  }, [activeTab]);

  return (
    <>
      <ul className="nav">
        {tabs.map(({ id, title, content }) => (
          <li key={id} className="nav__item">
            <NavLink
              to={`/tabs/${id}`}
              className="nav__item_link"
              onClick={() => handleTabClick(content)}
              activeClassName="nav__item_link-active"
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
      <Route
        path="/tabs"
        render={() => (
          <div className="description">
            <p className="description__text">{description}</p>
          </div>
        )}
      />
    </>
  );
};
