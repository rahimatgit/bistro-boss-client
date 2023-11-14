import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider
} from "react-router-dom";
import { router } from './Routes/Routes.jsx';
import MainLayout from './Layout/MainLayout.jsx';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <div className='max-w-7xl mx-auto'>
        <RouterProvider router={router}>
          <MainLayout></MainLayout>
        </RouterProvider>
      </div>
    </HelmetProvider>
  </React.StrictMode>,
)
