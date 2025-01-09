import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomePage from './components/pages/HomePage.jsx'
import Experiences from "./components/pages/Experiences.jsx"
import Projects from './components/pages/Projects.jsx'
import ContactMe from './components/pages/ContactMe.jsx'

import DefaultProfile from './components/project-pages/DefaultProfile.jsx'
import Flip from './components/project-pages/Flip.jsx'
import HDB from './components/project-pages/HDB.jsx'
import TodoList from './components/project-pages/TodoList.jsx'
import BusStopNavigator from './components/project-pages/BusStopNavigator.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "education-and-experiences",
    element: <Experiences />
  },
  { 
    path: "projects",
    element: <Projects />,
    children: [
      { index: true, element: <DefaultProfile /> },
      { path: "flip", element: <Flip /> },
      { path: "hdb-prices-analysis", element: <HDB /> },
      { path: "todo-list", element: <TodoList />},
      { path: "bus-stop-navigator", element: <BusStopNavigator />}
    ]
  },  
  {
    path: "contact-me",
    element: <ContactMe />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
