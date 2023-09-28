// import { Link, useParams } from 'react-router-dom';
// import { Tab } from '../../types/Tab';

// type Props = {
//   tabs: Tab[];
// };

// export const Tabs = ({
//   tabs,
// }: Props) => {
//   const { userId } = useParams();
//   const activeTab = tabs.find(tab => tab.id === userId);

//   return (
//     <>
//       <div className="tabs is-boxed">

//         <ul>
//           {tabs.map(tab => (
//             <li
//               key={tab.id}
//               data-cy="Tab"
//               className={activeTab
//                 && tab.id === activeTab.id ? 'is-active' : ''}
//             >
//               <Link
//                 to={`/tabs/${tab.id}`}
//               >
//                 {tab.title}

//               </Link>
//             </li>
//           ))}

//         </ul>
//       </div>
//       <div className="block" data-cy="TabContent">
//         {activeTab
//           ? activeTab.content
//           : 'Please select a tab'}
//       </div>

//     </>
//   );
// };

import { Link, useParams } from 'react-router-dom';
import { Tab as TabType } from '../../types/Tab';

type Props = {
  tabs: TabType[];
};

const Tab = ({ tab, isActive }: { tab: TabType, isActive: boolean }) => (
  <li
    key={tab.id}
    data-cy="Tab"
    className={isActive ? 'is-active' : ''}
  >
    <Link to={`/tabs/${tab.id}`}>
      {tab.title}
    </Link>
  </li>
);

export const Tabs = ({ tabs }: Props) => {
  const { userId } = useParams();
  const activeTab = tabs.find(tab => tab.id === userId);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <Tab
              tab={tab}
              isActive={Boolean(activeTab && tab.id === activeTab.id)}
            />
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {activeTab ? activeTab.content : 'Please select a tab'}
      </div>
    </>
  );
};
