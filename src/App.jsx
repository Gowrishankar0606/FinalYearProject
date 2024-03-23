import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Header/Navbar'
import Home from './Pages/1.Home/Home'
import Login from './Pages/2.Login/Login'
import Register from './Pages/3.Register/Register'
import Bloodrequest from './Pages/BloodRequest/Bloodrequest'

function App() {
  return (
    <div>
      <Router>
       <Navbar/>

       <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/register' element={<Register/>}/>
          <Route exact path='/bloodrequest' element={<Bloodrequest/>}/>
       </Routes>
     </Router>
    </div>
  )
}

export default App
