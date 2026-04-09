import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router/dom';
import './index.css'
import { router } from './Routes/Route.jsx';
import ContextAppData from './ContextAPI/ContextAppData.jsx';




createRoot(document.getElementById('root')).render(
  <ContextAppData>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </ContextAppData>
);
