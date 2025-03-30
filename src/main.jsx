import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import './App.css';
import './Cards.css'
import './Nav.css'
import './Trolley.css'
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Action from './components/Pages/Action.jsx';
import Services from './components/Pages/Services.jsx';
import Cards from './components/Cards.jsx';
import Trolley from './components/Pages/Trolley.jsx';
import Home from './components/Home.jsx';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/Home', element: <Home /> },
  { path: '/Action', element: <Action /> },
  { path: '/Cards', element: <Cards /> },
  { path: '/Services', element: <Services /> },
  { path: '/Trolley', element: <Trolley />}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
