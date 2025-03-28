import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import './App.css';
import './Cards.css'
import './Nav.css'
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Action from './components/Pages/Action.jsx';
import Services from './components/Pages/Services.jsx';
import Cards from './components/Cards.jsx';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/Action', element: <Action /> },
  { path: '/Cards', element: <Cards /> },
  { path: '/Services', element: <Services /> }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
