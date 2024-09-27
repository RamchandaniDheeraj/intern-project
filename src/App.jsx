// import About from "./component/About"
// import BookACall from "./component/BookACall"
// import CoreService from "./component/CoreService"
// import Portfolio from "./component/Portfolio"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import ChatBot from "./component/ChatBot"
import Navbar from "./component/Navbar"
import Footer from "./component/Footer"
import Home from "./component/Home"
import About from './component/About'
import Portfolio from './component/Portfolio'
import Expertise from './component/Expertise'
import Product from './component/Product'
import Blog from './component/Blog'
import ArticleCard from './component/ArticleCard'
import PartnershipDetails from './component/PartnershipDetails'
import BookACall from './component/BookACall'
import ReadMoreBtn from './component/ReadMoreBtn'
import Contact from './component/Contact'

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
          <Route path="/blog/readMore" element={<ArticleCard/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/expertise" element={<Expertise/>} />
          <Route path="/product" element={<Product/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/partnershipDetails" element={<PartnershipDetails/>} />
          <Route path="/BookACall" element={<BookACall/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
    <Footer/>
      </Router>

    </>
  )
}

export default App
