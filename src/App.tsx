import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.scss';
import { Header } from './components/Header/Header';
import { HomePage } from './components/HomePage/HomePage';
import { TabsPage } from './components/TabsPage/TabsPage';

/*
import { RouteComponentProps } from 'react-router-dom';

type TabsPageProps = React.FC<RouteComponentProps<{ tabId: string }>>;
const TabsPage: TabsPageProps = ({ match }) => {...};

or

import { useParams } from 'react-router-dom';

const TabsPage = () => {
  const { tabId } = useParams<{ tabId: string }>();
  ...
};
*/

const tabs = [
  { id: 'tab-1', title: 'Deposit', content: 'Lorem ipsum dolor sit, amet, consectetur adipisicing elit. Id ipsa, quaerat fugit est itaque laborum illo. Ratione corporis temporibus voluptatum accusantium quaerat repudiandae eius. Error consequatur, cumque quibusdam labore necessitatibus?' },
  { id: 'tab-2', title: 'Personal', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis optio reprehenderit ab, consequuntur facere eaque officia fugit quaerat asperiores, sunt architecto veritatis quibusdam neque aliquam quia voluptatibus praesentium, similique, debitis.' },
  { id: 'tab-3', title: 'Business', content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, praesentium quis aut quo facilis ut voluptates animi quas harum vel, a provident doloribus, ipsa repudiandae! Expedita provident adipisci cupiditate, dolore.' },
];

export const App:React.FC = () => (
  <div className="app">
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tabs/*" element={<TabsPage tabs={tabs} />} />
    </Routes>
  </div>
);
