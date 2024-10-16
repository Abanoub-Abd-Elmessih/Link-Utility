import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Pages/Layout/Layout';
import Icons from './Pages/Icons/Icons';
import Animation from './Pages/Animation/Animation';

function App() {
  const router = createBrowserRouter([
  {path:'/' , element:<Layout/>,children:[
    {index:true , element:<Home/>},
    {path:'icons' , element:<Icons/>},
    {path:'animation' , element:<Animation/>},
  ]}
  ])
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
