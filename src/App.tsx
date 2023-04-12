import { useEffect, useState } from 'react'
import Home from '@/scenes/home';
import Navbar from '@/scenes/navbar';
import Bio from '@/scenes/bio';
import Specs from '@/scenes/specs';
import { SelectedPage } from './shared/types';
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
      <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-whiteAccent-500 to-transparent opacity-25 dark:opacity-100" />
      <Specs setSelectedPage={setSelectedPage}/>
      <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-redAccent-500 to-transparent opacity-25 dark:opacity-100" />
      <Modern setSelectedPage={setSelectedPage}/>
      <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-whiteAccent-500 to-transparent opacity-25 dark:opacity-100" />
      <ContactUs setSelectedPage={setSelectedPage}/>

  </div>
  )
}

export default App
