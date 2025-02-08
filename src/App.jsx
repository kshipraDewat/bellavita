import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Home from "./Home"
import About from "./About"
import { Route, Routes } from "react-router"
import Collection from "./Collection"
import Contact from "./Contact"
import Profile from "./Profile"
import Cart from "./Cart"
import Luxury from "./Luxury"
import Success from "./Success"

function App() {
  
  return (
    <div className=' w-full font-thin  '>
      
      <Navbar/>

      <Routes>
        <Route path="/" element={<Hero/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/collection" element={<Collection/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<Profile/>}/>
        <Route path="/luxury" element={<Luxury/>}/>
        <Route path="/success" element={<Success/>}/>
      </Routes>
     
      <Footer/>

    </div>
  )
}

export default App
