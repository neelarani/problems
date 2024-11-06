import { createBrowserRouter } from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Statistics from '../pages/Statistics';
import Dashboard from '../pages/Dashboard';
import AllCatagorys from '../pages/Categorys/AllCatagorys';
import Laptop from '../pages/Categorys/Laptop';
import Phones from '../pages/Categorys/Phones';
import Iphones from '../pages/Categorys/Iphones';
import Chargers from '../pages/Categorys/Chargers';
import PowerBank from '../pages/Categorys/PowerBank';
import ProductDetails from '../pages/ProductDetails';
import Cart from '../components/Cart/Cart';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch(`../gadgetData.json`),
        children: [
          {
            path: '/',
            loader: () => fetch('../gadgetData.json'),
            element: <AllCatagorys></AllCatagorys>,
          },
          {
            // same all data
            path: '/laptops',
            loader: () => fetch('../gadgetData.json'),
            element: <Laptop></Laptop>,
          },
          {
            // follow same syste
            path: '/phones',
            loader: () => fetch('../gadgetData.json'),

            element: <Phones></Phones>,
          },
          {
            // follow same syste
            path: '/i_phones',
            loader: () => fetch('../gadgetData.json'),

            element: <Iphones></Iphones>,
          },
          {
            path: '/chargers',
            loader: () => fetch('../gadgetData.json'),
            element: <Chargers></Chargers>,
          },
          {
            path: '/powerbank',
            loader: () => fetch('../gadgetData.json'),
            element: <PowerBank></PowerBank>,
          },
        ],
      },

      {
        path: '/statistics',
        element: <Statistics></Statistics>,
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: '/dashboard',
            element: <Cart></Cart>,
          },
        ],
      },
      {
        path: '/products/:productId',
        loader: () => fetch('../gadgetData.json'),
        element: <ProductDetails></ProductDetails>,
      },
    ],
  },
]);

export default routes;
