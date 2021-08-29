import React, { useEffect , useState } from 'react';
import { useParams } from 'react-router-dom';

import './TabsPage.scss'
import { Tab } from '../Tab';



const tabs = [
  {
 id: 'tab-1', title: 'Tab 1', content: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis possimus quae accusantium exercitationem mollitia excepturi suscipit libero laboriosam ex esse blanditiis odio temporibus, nesciunt corrupti dolore hic commodi deleniti ipsam.' 
},
  {
 id: 'tab-2', title: 'Tab 2', content: ' Mollitia ipsam soluta dolore asperiores id omnis unde perferendis delectus earum tempora, distinctio eos facere. Neque reprehenderit quidem repellat. Expedita, molestias debitis.' 
},
  {
 id: 'tab-3', title: 'Tab 3', content: ' Hic voluptatibus aperiam sed atque unde laborum nemo iusto, id inventore dolorum quas, aliquid quasi! Provident quos debitis accusantium, magni optio iste!' 
},
];

export const TabsPage = () => {
  const [tab, setTab] = useState(null);
  const { tabId } = useParams();

  useEffect(() => {
    setTab(tabs.find(obj => obj.id === tabId));
  }, [tabId]);

  return (
    <div className="tabs-page">
      <h2>
        TabsPage
      </h2>
      <nav className="tabs-page__tabs">
        {
          tabs.map(tab => (
            <Tab {...tab} />
          ))
        }
      </nav>
      <article>
        {
          tab ? <h2>{tab.content}</h2> : <h2>Please select a tab</h2>
        }
      </article>
    </div>
  );
}
