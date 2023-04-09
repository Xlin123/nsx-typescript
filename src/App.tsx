import { useEffect, useState } from 'react'
import Home from '@/scenes/home';
import Navbar from '@/scenes/navbar';
import Bio from '@/scenes/bio';
import Specs from '@/scenes/specs';
import { SelectedPage } from './shared/types';
import MobileSpacer from './shared/MobileSpacer';
import Modern from './scenes/modernized';
import ContactUs from './scenes/contact';



function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)
useEffect(() => {
  const handleScroll = () => {
    if(window.scrollY===0){
      setIsTopOfPage(true);
      setSelectedPage(SelectedPage.Home);
    }
    if(window.scrollY!==0) setIsTopOfPage(false);
  }
  window.addEventListener("scroll", handleScroll);
  return () => {window.removeEventListener("scroll", handleScroll)}
}, []); 


  return (
    <div className="app bg-primary-500 ">
      <Navbar 
      isTopOfPage={isTopOfPage}
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}/>
      <Home setSelectedPage={setSelectedPage}/>
      <Bio setSelectedPage={setSelectedPage}/>
      <MobileSpacer></MobileSpacer>
      <Specs setSelectedPage={setSelectedPage}/>
      <Modern setSelectedPage={setSelectedPage}/>
      <ContactUs setSelectedPage={setSelectedPage}/>

  </div>
  )
}

export default App
