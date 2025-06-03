import './App.css'
import NavbarMain from './components/navbar/navbarMain'
import HeroMain from './components/heroSection/heroMain'
import HeroGradient from './components/heroSection/heroGradient'
import HeroSubSection from './components/heroSection/heroSubSection'
import AboutMeMain from './components/aboutMe/AboutMeMain'
import Helper from './components/helper'

function App() {

  return (
    <div className='font-body'>
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      <HeroSubSection />
      <AboutMeMain />
      <Helper />
    </div>
  )
}

export default App
