

import Login from './views/Login';
import Dashboard from './views/Dashboard';
import AppRoot from './views/layouts/AppRoot'


const routes = [
    {
        path: '/',
        name: "",
        component: AppRoot,
        children: [
            {
                path: '',
                name: 'home',
                component: Dashboard
            },
            {
                path: 'login',
                name: 'login',
                component: Login
            },
            {
                path: 'dashboard',
                name: 'dashboard',
                component: Dashboard
            }
        ]
    }
]

export default routes;

