import './App.css'
import CulturalThings from './Components/Blogs'
import Description1 from './Components/Description1'
import Destinations from './Components/Destinations'
import Footer from './Components/Footer'
import HeroSection from './Components/HeroSection'
import HowWeHelp from './Components/Services'
import Navbar from './Components/Navbar'
import Testimonials from './Components/Testimonials'

function App() {
  
  return (
    <>
      <Navbar /> 
      <HeroSection />
      <Description1 />
      <Destinations />
      <HowWeHelp />
      <Testimonials />
      <CulturalThings />
      <Footer />
    </>
  )
}

export default App
