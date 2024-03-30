import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'
import { Toaster } from 'react-hot-toast';
import Navbar from './Components/Header/Navbar'
import Home from './Pages/1.Home/Home'
import Login from './Pages/2.Login/Login'
import Register from './Pages/3.Register/Register'
import Bloodrequest from './Pages/BloodRequest/Bloodrequest'
import Aboutus from './Pages/1.Home/Aboutus'
import Contactus from './Pages/1.Home/Contactus'


function App() {
  return (
    <div>
      <Router>
       <Navbar/>

       <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/aboutus' element={<Aboutus/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/register' element={<Register/>}/>
          <Route exact path='/bloodrequest' element={<Bloodrequest/>}/>
          <Route exact path='/contactus' element={<Contactus/>}/>
       </Routes>
     </Router>
     <Toaster position="top-right" reverseOrder={false}/>
    </div>
  )
}

export default App
