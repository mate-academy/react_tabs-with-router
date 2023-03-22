// import { useParams } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import { Loader } from '../components/Loader';
// import { PeopleTable } from '../components/PeopleTable';

// import { getPeople } from '../api';
// import { Person } from '../types';

// const findPerson = (people: Person[], name: string) => {
//   return people.find((person) => person.name === name);
// };

import { useParams } from 'react-router-dom';
// import { useState } from 'react';/
import { Tabs } from '../components/Tabs';
// import { Tab } from '../types/Tab';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage = () => {
  const { tabId } = useParams();
  // const selectedTab = useMemo(() => {
  //   return tabId ?? null;
  // }, [tabId]);
  // const [people, setPeople] = useState<Person[]>([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [hasLoadingError, setHasLoadingError] = useState(false);
  // const [hasNoDataError, setHasNoDataError] = useState(false);
  // const { slug: selectedPersonSlug = '' } = useParams();

  // useEffect(() => {
  //   setIsLoading(true);
  //   getPeople()
  //     .then((fetchedPeople) => {
  //       const isEmptyResponse = !fetchedPeople.length;

  //       if (isEmptyResponse !== hasNoDataError) {
  //         setHasNoDataError(isEmptyResponse);
  //       }

  //       setPeople(fetchedPeople.map((person) => {
  //         const currentPerson = { ...person };
  //         const { fatherName, motherName } = person;

  //         if (motherName) {
  //           currentPerson.mother = findPerson(fetchedPeople, motherName);
  //         }

  //         if (fatherName) {
  //           currentPerson.father = findPerson(fetchedPeople, fatherName);
  //         }

  //         return currentPerson;
  //       }));
  //     })
  //     .catch(() => setHasLoadingError(true))
  //     .finally(() => setIsLoading(false));
  // }, []);

  return (
    <div className="container">
      <h1 className="title">Tabs page</h1>

      <Tabs
        tabs={tabs}
        selectedTabId={tabId ?? null}
      />
    </div>
  );
};
