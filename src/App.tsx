// Importa bibliotecas essenciais do React e React Router.
import { useState, useEffect } from 'react';
import {
  HashRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
  useParams,
} from 'react-router-dom';

// URL do CDN do Bulma para estilização
// O `index.html` precisará incluir este link para funcionar.
// <link rel="stylesheet"
//       href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
// <style>
//   .has-text-danger { color: #f14668; }
//   .has-background-warning {
//     background-color: #ffdd57 !important;
//   }
//   .has-background-grey-lighter {
//     background-color: #f5f5f5 !important;
//   }
// </style>

// Interface para definir o tipo de um objeto de pessoa.
interface Person {
  name: string;
  slug: string;
  gender: 'male' | 'female';
  motherName: string;
  fatherName: string;
}

// Dados simulados para representar a resposta da API, agora tipados.
const PEOPLE_DATA: Person[] = [
  {
    name: 'John Doe',
    slug: 'john-doe',
    gender: 'male',
    motherName: 'Jane Doe',
    fatherName: 'Unknown',
  },
  {
    name: 'Jane Doe',
    slug: 'jane-doe',
    gender: 'female',
    motherName: 'Eve Johnson',
    fatherName: 'John Johnson',
  },
  {
    name: 'John Johnson',
    slug: 'john-johnson',
    gender: 'male',
    motherName: '-',
    fatherName: '-',
  },
  {
    name: 'Eve Johnson',
    slug: 'eve-johnson',
    gender: 'female',
    motherName: '-',
    fatherName: '-',
  },
  {
    name: 'Peter Pan',
    slug: 'peter-pan',
    gender: 'male',
    motherName: 'Mary Pan',
    fatherName: 'George Pan',
  },
  {
    name: 'Mary Pan',
    slug: 'mary-pan',
    gender: 'female',
    motherName: 'Eve Johnson',
    fatherName: 'John Johnson',
  },
  {
    name: 'George Pan',
    slug: 'george-pan',
    gender: 'male',
    motherName: '-',
    fatherName: '-',
  },
];

// Componente para a barra de navegação.
const Navbar = () => {
  return (
    <nav
      className="navbar is-light"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="/#">
          <h1 className="title is-4">Tabela de Pessoas</h1>
        </a>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `navbar-item ${isActive ? 'has-background-grey-lighter' : ''}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/people"
            className={({ isActive }) =>
              `navbar-item ${isActive ? 'has-background-grey-lighter' : ''}`
            }
          >
            People
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

// Componente para a página inicial.
const HomePage = () => {
  return (
    <section className="section">
      <h1 className="title">Home Page</h1>
    </section>
  );
};

// Componente para a página 'Página não encontrada'.
const NotFoundPage = () => {
  return (
    <section className="section">
      <h1 className="title">Page not found</h1>
    </section>
  );
};

// Interface para definir os tipos das propriedades do componente PersonLink.
interface PersonLinkProps {
  name: string;
  people: Person[];
}

// Componente que renderiza um nome como um link ou texto simples.
const PersonLink = ({ name, people }: PersonLinkProps) => {
  const person = people.find(p => p.name === name);
  const isFemale = person?.gender === 'female';

  if (!name || name === '-') {
    return <span>-</span>;
  }

  if (person) {
    return (
      <NavLink
        to={`/people/${person.slug}`}
        className={`has-text-info ${isFemale ? 'has-text-danger' : ''}`}
      >
        {name}
      </NavLink>
    );
  }

  return <span className={isFemale ? 'has-text-danger' : ''}>{name}</span>;
};

// Interface para definir os tipos das propriedades do componente PeopleTable.
interface PeopleTableProps {
  people: Person[];
  selectedSlug?: string; // O '?' indica que esta propriedade é opcional.
}

// Componente da tabela de pessoas, agora com props tipadas.
const PeopleTable = ({ people, selectedSlug }: PeopleTableProps) => {
  return (
    <table className="table is-fullwidth is-striped is-hoverable is-bordered">
      <thead>
        <tr>
          <th>Name</th>
          <th>Mother</th>
          <th>Father</th>
        </tr>
      </thead>
      <tbody>
        {people.map(person => (
          <tr
            key={person.slug}
            className={
              person.slug === selectedSlug ? 'has-background-warning' : ''
            }
          >
            <td>
              <PersonLink name={person.name} people={people} />
            </td>
            <td>
              <PersonLink name={person.motherName} people={people} />
            </td>
            <td>
              <PersonLink name={person.fatherName} people={people} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// Componente principal para a página de pessoas.
const PeoplePage = () => {
  // O estado 'people' agora é tipado como um array de 'Person'.
  const [people, setPeople] = useState<Person[]>([]);
  const [loading, setLoading] = useState(true);

  const { slug } = useParams();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setPeople(PEOPLE_DATA);
      setLoading(false);
    }, 500);
  }, []);

  return (
    <section className="section">
      <h1 className="title">People Page</h1>
      {loading ? (
        <p>Loading people data...</p>
      ) : (
        <PeopleTable people={people} selectedSlug={slug} />
      )}
    </section>
  );
};

// Componente principal do aplicativo.
export const App = () => {
  return (
    <HashRouter>
      <Navbar />
      <div className="container is-fluid">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/people" element={<PeoplePage />} />
          <Route path="/people/:slug" element={<PeoplePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;
