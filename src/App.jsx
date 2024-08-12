// import Blog from "./component/Blog"
// import About from "./component/About"
// import BookACall from "./component/BookACall"
// import CoreService from "./component/CoreService"
// import Portfolio from "./component/Portfolio"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ChatBot from "./component/ChatBot"
import Navbar from "./component/Navbar"
import Footer from "./component/Footer"
import Home from "./component/Home"
import About from './component/About'
import Portfolio from './component/Portfolio'

function App() {
  return (
    <>
      <Router>
<Navbar/>
    {/* <About/>
        <BookACall/>
        <Blog/>
    <Portfolio/>  */}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
    <Footer/>
      </Router>

    </>
  )
}

export default App
