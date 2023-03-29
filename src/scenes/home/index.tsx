import { SelectedPage } from '@/shared/types';
import homePagePicture from "@/assets/nsxHome.jpg";
import homePageText from '@/assets/HomePageText.png';
import foxSponsor from '@/assets/foxSponsor.png';
import yoshimuraSponsor from '@/assets/yoshimuraSponsor.png';
import hrcSponsor from '@/assets/hrcSponsor.png';
import redbullSponsor from '@/assets/redbullSponsor.png';
import michelinSponsor from '@/assets/michelinSponsor.png';
import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/shared/ActionButton';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';


type Props = {
    setSelectedPage : (value: SelectedPage) => void;
}

const Home = ({setSelectedPage}: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section
    id='home' 
    className='gap-8 bg-gxray-20 py-10 md:h-full md:pb-0'>

      {/*IMAGE AND MAIN HEADER*/}
      <motion.div className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'
      onViewportEnter={() => setSelectedPage(SelectedPage.Home)}>
        {/*MAIN*/}
        <div className='z-10 mt-32 md:basis-3/5'>
          {/*headings*/}
          <motion.div 
          className='md:-mt-20'
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.5}}
          transition={{duration:0.5}}
          variants={{
            hidden: {opacity:0, x:-50},
            visible: {opacity:1, x:0}
          }}>
            <div className='relative'>
                <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1]'>
                  <img alt='home-page-text' src={homePageText}></img>
                </div>
            </div>

            <p className='mt-4 text-sm font-montserrat text-whiteAccent-500'>
              Honda Motor’s NSX engineering team organized an event for NSX owners in June 1991. The event was intended to give the owners a chance to understand the true capabilities of their car, and to help them enjoy it safely. Yet, those who had created the NSX wanted to continue refining it. 
            </p>
          </motion.div>
        </div>
        

        {/*IMAGE*/}
        <div className='flex basis-3/5 justify-center p-5 md:z-10 md:m-5'>
          <img className="rounded-md" alt="home-pageGraphic" src={homePagePicture}/>
        </div>
    </motion.div>


      {/*ACTIONS*/}
      <motion.div className='mt-4 flex items-center mb-8 justify-center md:-mt-8'
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, amount: 0.5}}
      transition={{delay:0.2, duration:0.5}}
      variants={{
        hidden: {opacity:0, x:-50},
        visible: {opacity:1, x:0}
      }}>
          <div className='mr-4'>
              <ActionButton setSelectedPage={setSelectedPage}>
                 Join Now!
              </ActionButton>
          </div>
              <AnchorLink 
              className='text-sm font-bold text-whiteAccent-500 hover:text-redAccent-500 md:mr-8'
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
              >
                Learn More
              </AnchorLink>
      </motion.div>

      {/*SPONSORS*/}
      {isAboveMediumScreens && (
        <div className='h-[150px] w-full bg-primary-300 py-5'>
          <div className='mx-auto w-5/6'>
            <div className='flex w-full items-center justify-between gap-4'>
              <img className = 'w-[100px] h-[100px] rounded' alt='foxSponsor' src={foxSponsor}/>
              <img className = 'w-[100px] h-[100px] rounded' alt='yoshimuraSponsor' src={yoshimuraSponsor}/>
              <img className = 'w-[100px] h-[100px] rounded' alt='hrcSponsor' src={hrcSponsor}/>
              <img className = 'w-[140px] h-[100px] rounded' alt='redbullSponsor' src={redbullSponsor}/>
              <img className = 'w-[140px] h-[100px] rounded' alt='michelinSponsor' src={michelinSponsor}/>
            </div>
          </div>
        </div>
      )}



    </section>
  )
}

export default Home