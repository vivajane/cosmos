import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Portfolio from './pages/Portfolio'
import SignUp from './pages/SignUp'
import Contact from './pages/Contact'
import Testimonials from './pages/Testimonials'

function App() {
  return (
    <div>
<BrowserRouter>
<Header/>

<Routes>
  
  <Route path='/' element = {<Home/>}/>
  <Route path="about" element={<About/>}/>
  <Route path="login" element={<Login/>}/>
  <Route path="about" element={<About/>}/>
  <Route path="testimonials" element={<Testimonials/>}/>
  <Route path="portfolio" element={<Portfolio/>}/>
  <Route path="signup" element={<SignUp/>}/>
  <Route path="contact" element={<Contact/>}/>
</Routes>
<Footer/>
</BrowserRouter>
    </div>

  )
}

export default App
