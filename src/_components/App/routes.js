import React from 'react';
import DashboardPage from '../DashboardPage/DashboardPage';
import CategoriesPage from '../CategoriesPage/CategoriesPage';
import ProductsPage from '../ProductsPage/ProductsPage';
import AccountsPage from '../AccountsPage/AccountsPage';
import ErrorPage from '../ErrorPage/ErrorPage';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <DashboardPage />
    },
    {
        path: '/accounts',
        exact: false,
        main: () => <AccountsPage />
    },
    {
        path: '/categories',
        exact: false,
        main: () => <CategoriesPage />
    },
    {
        path: '/products',
        exact: false,
        main: () => <ProductsPage />
    },
    {
        path: '',
        exact: false,
        main: () => <ErrorPage/>
    }
];

export default routes;