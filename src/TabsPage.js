import React from 'react';
import { Route } from 'react-router-dom';
import Tabs from './Tabs';

const TabsPage = () => <Route path="/tabs/:id?" component={Tabs} />;

export default TabsPage;
