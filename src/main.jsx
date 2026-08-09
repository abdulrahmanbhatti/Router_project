import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Outlet, Route } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Layout from './Layout.jsx'
import Contact from './Components/Contect/Contact.jsx'
import User from './Components/User/User.jsx'


// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:'',
//         element:<Home/>
//       },
//       {
//         path:'About',
//         element:<About/>
//       },
//       {
//         path:'Contact',
//         element:<Contact/>
//       }
//     ]
//   }
// ])


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route  path ='/' element={<Layout/>}>
      <Route path='' element ={<Home/>}/>
      <Route path='About' element ={<About/>}/>
      <Route path='Contact' element ={<Contact/>}/>
      <Route path='User:id' element ={<User/>}/>
     

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider  router={router}/>

  
  </StrictMode>,
)
