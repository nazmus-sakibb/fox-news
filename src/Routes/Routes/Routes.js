import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
// import Home from '../../components/Home/Home';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        // children: [
        //     {
        //         path: '/',
        //         element: <Home/>
        //     }
        // ]
    }
]);