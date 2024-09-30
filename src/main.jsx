import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Routes from './components/Routes.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Projects from './components/Projects.jsx'
import Skill from './components/Skill.jsx'


const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Routes/>}>
      <Route path=''element= {<Home/>} />
      <Route path='about'element= {<About/>} />
      <Route path='contact'element= {<Contact/>} />
      <Route path='skill'element= {<Skill/>} />
      <Route path='project'element= {<Projects/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <div className=''>
    <RouterProvider router={router}/>
  </div>
  </React.StrictMode>,
)
