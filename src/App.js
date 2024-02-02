import './App.css';
import Footer from './components/footercomponent/footer';
import SkillsComponent from './components/SkillsComponent/SkillsComponent';
import HeroSection from './components/herosection/Herosection';
import Navbar from './components/navbar/Navbar';
import ProjectsSection from './components/projectsection/Project-section';
import ContactForm from './components/Contactus/Contactform';

function App() {
  return (<div id=' wrapper ' className='h-screen overflow-y-auto overflow-x-hidden absolute '>
    <div className='container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>

    <Navbar></Navbar>
    <HeroSection></HeroSection>
    <ProjectsSection></ProjectsSection>
    <SkillsComponent></SkillsComponent>
    <ContactForm></ContactForm>
    <Footer></Footer>
    

    </div>
    </div>
  );
}

export default App;
