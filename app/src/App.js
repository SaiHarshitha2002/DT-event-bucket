import 'bootstrap/dist/css/bootstrap.css'
import {Link,Routes,Route} from "react-router-dom"
import Home from './components/Home'
import Contactus from './components/Contactus'
import Profile from './components/Profile'
import All from './components/All'
import Vjtheatro from './components/Vjtheatro'
import Livewire from './components/Livewire'
import Nrithyatarang from './components/Nrityatarang'
import Diurnalis from './components/Diurnalis'
import Login from './components/Login'
import Signup from './components/Signup'
import Cresendo from './components/Cresendo'
import CreativeArts from './components/CreativeArts'
import Dramatrix from './components/Dramatrix'
import Scintillate from './components/Scintillate'
import TuringHut from './components/TuringHut'
import SpecialEvents from './components/SpecialEvents'
import { useEffect, useState } from 'react'
import axios from 'axios';
function App() {
  
  let [user,setUser]=useState("");
  const getUser=(obj)=>{
    console.log("HOOOO");
    axios.get("http://localhost:4040/users/cuser")
    .then((response)=>{setUser(response.data.payload.cuser)
    console.log(response.data.payload.cuser)
    window.location.reload()
    })
    .catch((err)=>{
      console.log("first",err)
    })
  }
  useEffect(()=>{
    axios.get("http://localhost:4040/users/cuser")
    .then((response)=>{setUser(response.data.payload.cuser)
     //window.location.reload()
    })
    .catch((err)=>{
      console.log("first",err)
    })
    //window.location.reload()
  })
  return (
     <div className='container m-5 p-5 text-center border border-5 border-dark rounded-3'>
   <div className='box border border-5 border-primary rounded-pill bg-primary '>
   <ul className="nav mx-auto justify-content-evenly">
  <li className="nav-item">
    <Link className="nav-link text-white"  to="">HOME</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link  text-white" to="contactus">CONTACT US</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link  text-white" to="profile">PROFILE</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link  text-white" to="/" >LOGIN</Link>
  </li>
</ul>
   </div>

  <Routes>
  <Route path='/' element={<Login props={getUser}/>} />
    <Route path="/home" element={<Home/>} >
      <Route path="all" element={<All/>} />
      <Route path="Vjtheatro" element={<Vjtheatro props={user}/>} />
      <Route path="Livewire" element={<Livewire props={user}/>} />
      <Route path="Nrithyatarang" element={<Nrithyatarang props={user}/>} />
      <Route path="Diurnalis" element={<Diurnalis props={user}/>} />
      <Route path="cresendo" element={<Cresendo props={user}/>}/>
      <Route path="creativeArts" element={<CreativeArts props={user}/> } />
      <Route path="dramatrix" element={<Dramatrix props={user}/>} />
      <Route path="scintillate" element={<Scintillate props={user}/>} />
      <Route path="turinghut" element={<TuringHut props={user}/>} />
      <Route path="SpecialEvents" element={<SpecialEvents props={user}/>}/>
    </Route>
    <Route path="contactus" element={<Contactus/>} />
    <Route path="Profile" element={<Profile/>} />
    
    <Route path='signup' element={<Signup/>} />
  </Routes>


  </div> )
}

export default App;