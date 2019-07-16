import React from 'react';

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const Category = React.lazy(() => import('./views/stock/Category'));


// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
    { path: '/', exact: true, name: 'Home' },
    { path: '/dashboard', name: 'Dashboard', component: Dashboard },
    { path: '/category', name: 'Category', component: Category },


];

export default routes;
