import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Login from './view/Login/Login';
import Home from './view/Home/Home';
import Details from './view/Details/Details';
import Orders from './view/Orders/Orders';


const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/',
        element:<Home/>
    },
    {
        path:'/details/:id',
        element:<Details/>
    },
    {
        path:'/order',
        element:<Orders/>
    }
])
root.render(<RouterProvider router={router} />);

