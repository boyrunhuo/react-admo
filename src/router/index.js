import Home from '../pages/Home';
import User from '../pages/User';

const routes = [
    {
        path: '/',
        exact:true,
        component:Home
    },
    {
        path: '/user',
        exact:true,
        component:User
    }
   
]

export default routes;