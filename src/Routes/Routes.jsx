import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../Layouts/Main';
import Home from '../pages/Home/Home/Home';
import Services from '../pages/Services/Services';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/services',
        element: <Services></Services>,
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/contact',
        element: <Contact></Contact>,
      },
    ],
  },
]);

export default router;
