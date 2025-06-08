import './App.css'
import NavbarMain from './components/navbar/navbarMain'
import HeroMain from './components/heroSection/heroMain'
import HeroGradient from './components/heroSection/heroGradient'
import HeroSubSection from './components/heroSection/heroSubSection'
import AboutMeMain from './components/aboutMe/aboutMeMain'
import AboutMeGradient from './components/aboutMe/aboutMeGradient'
import SkillsMain from './components/skills/skillsMain'
import ExperienceMain from './components/experience/experienceMain'
import ProjectsMain from './components/projects/projectsMain'
import ContactMeMain from './components/contactMe/contactMeMain'
import FooterMain from './components/footer/footerMain'


function App() {

  return (
    <div className='font-body text-white relative overflow-hidden'>
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      <HeroSubSection />
      <AboutMeGradient /> 
      <AboutMeMain />
      <SkillsMain />
      <ExperienceMain />
      <ProjectsMain />
      <ContactMeMain />
      <FooterMain />
    </div>
  )
}

export default App
