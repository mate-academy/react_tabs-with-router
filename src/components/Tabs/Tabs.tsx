import React from 'react';
import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[],
};

export const Tabs: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();

  const selectedTab = tabs.find(({ id }) => id === tabId);

  return (
    <div className="section">
      <div className="container">
        <div className="tabs is-boxed">
          <ul>
            {
              tabs.map(({ id, title }) => (
                <li
                  data-cy="Tab"
                  className={classNames({ 'is-active': id === tabId })}
                >
                  <Link to={`../${id}`}>{title}</Link>
                </li>
              ))
            }
          </ul>
        </div>
      </div>

      <div className="block" data-cy="TabContent">
        {
          selectedTab
            ? selectedTab.content
            : 'Please select a tab'
        }
      </div>
    </div>
  );
};

// { /* // <div className="block">
// //   <div className="box table-container">
// //     <table
// //       data-cy="peopleTable"
// //       className="table is-striped is-hoverable is-narrow is-fullwidth"
// //     >
// //       <thead>
// //         <tr>
// //           <th>Name</th>
// //           <th>Sex</th>
// //           <th>Born</th>
// //           <th>Died</th>
// //           <th>Mother</th>
// //           <th>Father</th>
// //         </tr>
// //       </thead>

// //       <tbody>
// //         {
// //           people.map((person) => {
// //             const {
// //               slug,
// //               sex,
// //               born,
// //               died,
// //               motherName,
// //               fatherName,
// //             } = person;

// //             const mother = people.find((human) => (
// //               human.name === motherName
// //             ));

// //             const father = people.find((human) => (
// //               human.name === fatherName
// //             ));

// //             const isSelected = userSlug === slug;

// //             return (
// //               <tr
// //                 data-cy="person"
// //                 key={slug}
// //                 className={classNames(
// //                   { 'has-background-warning': isSelected },
// //                 )}
// //               >
// //                 <td>
// //                   <PersonLink
// //                     person={person}
// //                   />
// //                 </td>

// //                 <td>{sex}</td>
// //                 <td>{born}</td>
// //                 <td>{died}</td>

// //                 <td>
// //                   {
// //                     mother
// //                       ? (
// //                         <PersonLink
// //                           person={mother}
// //                         />
// //                       ) : (
// //                         <span>{motherName || '-'}</span>
// //                       )
// //                   }
// //                 </td>

// //                 <td>
// //                   {
// //                     father
// //                       ? (
// //                         <PersonLink
// //                           person={father}
// //                         />
// //                       ) : (
// //                         <span>{fatherName || '-'}</span>
// //                       )
// //                   }
// //                 </td>
// //               </tr>
// //             );
// //           })
// //         }
// //       </tbody>
// //     </table>

// //   </div>
// // </div> */ }
