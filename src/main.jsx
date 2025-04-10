import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import './App.css';
import './Cards.css';
import './Nav.css';
import './Hero.css';
import './Trolley.css';
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './components/Home.jsx';
import Cart from './components/Pages/Cart.jsx';
import Services from './components/Services.jsx';
import ShopingPage from './components/Pages/ShopingPage.jsx';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/Home', element: <Home /> },
  { path: '/Services', element: <Services /> },
  { path: '/ShopingPage', element: <ShopingPage /> },
  { path: '/Cart', element: <Cart />}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
