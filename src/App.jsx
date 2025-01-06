import './App.css'
import About from './components/About'
import Footer from './components/Footer'
import Main from './components/Main'
import Navbar from './components/Navbar'
import Contact from './contact/page'
import Review from './reviews/page'
import Services from './services/page'

function App() {
  return (
    <>
    <div className=''>
      <Navbar/>
      <Main/>
      <About/>
      <Footer/>
    </div>
    <div className='hidden'>
      <Contact/>
    </div>
    <div className='hidden'>
      <Services/>
    </div>
    <div className='hidden'>
    <Review/>
    </div>
    </>
  )
}

export default App
