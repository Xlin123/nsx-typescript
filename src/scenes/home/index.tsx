import { SelectedPage } from '@/shared/types';
import homePagePicture from "@/assets/nsxHome.jpg";
import homePageText from '@/assets/HomePageText.png';
import foxSponsor from '@/assets/foxSponsor.png';
import yoshimuraSponsor from '@/assets/yoshimuraSponsor.png';
import hrcSponsor from '@/assets/hrcSponsor.png';
import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/shared/ActionButton';
import AnchorLink from 'react-anchor-link-smooth-scroll';


type Props = {
    setSelectedPage : (value: SelectedPage) => void;
}

const Home = ({setSelectedPage}: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section
    id='home' 
    className='gap-8 bg-gray-20 py-10 md:h-full md:pb-0'>

      {/*IMAGE AND MAIN HEADER*/}
      <div className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6'>
        {/*MAIN*/}
        <div className='z-10 mt-32 md:basis-3/5'>
          {/*headings*/}
          <div className='md:-mt-20'>
            <div className='relative'>
                <div className='before:absolute before:-top-20 before:-left-20 before:z-[-1]'>
                  <img alt='home-page-text' src={homePageText}></img>
                </div>
            </div>

            <p className='mt-4 text-sm'>
              Honda Motor’s NSX engineering team organized an event for NSX owners in June 1991. The event was intended to give the owners a chance to understand the true capabilities of their car, and to help them enjoy it safely. Yet, those who had created the NSX wanted to continue refining it. 
            </p>
          </div>
        </div>
        

        {/*IMAGE*/}
        <div className='flex basis-3/5 justify-center md:z-10 md:ml-5
          '>
          <img alt="home-pageGraphic" src={homePagePicture}/>
        </div>
      </div>


      {/*ACTIONS*/}
      <div className='mt-4 flex items-center mb-8 justify-center md:-mt-8'>
          <div className='md:w-1/3'>
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
        </div>

      {/*SPONSORS*/}
      {isAboveMediumScreens && (
        <div className='h-[150px] w-full bg-primary-300 py-10'>
          <div className='mx-auto w-5/6'>
            <div className='flex w-3/5 items-center justify-between gap-4'>
              <img className = 'w-[100px] h-[100px]' alt='foxSponsor' src={foxSponsor}/>
              <img className = 'w-[100px] h-[100px]' alt='yoshimuraSponsor' src={yoshimuraSponsor}/>
              <img className = 'w-[100px] h-[100px]' alt='hrcSponsor' src={hrcSponsor}/>
            </div>
          </div>
        </div>
      )}



    </section>
  )
}

export default Home