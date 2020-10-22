import Login from '../contain/login/index';
import Home from '../contain/home/index'

const routes = [
    {
        path: "/",
        component: Login,
        exact: true,
    },
    {
        path: "/Home",
        component: Home,
        auth: true,
        routes: [
            // {
            //     path: "/Home/bus",
            //     component: Bus,
            //     exact: true,
            //     auth: true,
            // },
            // {
            //     path: "/system/bus22",
            //     component: Bus22,
            //     exact: true,
            //     auth: true,
            // },
        ]
    }
]

export default routes;