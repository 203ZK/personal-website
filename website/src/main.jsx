import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomePage from './components/pages/HomePage.jsx'
import Experiences from "./components/pages/Experiences.jsx"
import Projects from './components/pages/Projects.jsx'
import Flip from './components/Flip.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "education-and-experiences",
    element: <Experiences />
  },
  { path: "projects",
    element: <Projects /> },
  { 
    path: "projects/flip", 
    element: <Flip /> 
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
