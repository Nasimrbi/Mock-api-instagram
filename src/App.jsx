import { Routes , Route } from 'react-router-dom'
import Login from './pages/Login'
import ProtectedRoutes from '../ProtectedRoutes';
import Posts from './pages/Posts';
import UserPanel from './pages/UserPanel';


function App() {

  return (
    
    <Routes>
      <Route path='/login' element={<Login  />} ></Route>
      <Route path='/' element={
        <ProtectedRoutes>
        <Posts />
      </ProtectedRoutes>
      } ></Route>
      <Route path='/userpanel' element={
        <ProtectedRoutes >
        <UserPanel />
      </ProtectedRoutes>
      } ></Route>
    </Routes>
    
  )
}

export default App
