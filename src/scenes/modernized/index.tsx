import Heading from '@/shared/Heading';
import { SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion';
import React from 'react'
import image1 from '@/assets/modern1.jpg'
import image2 from '@/assets/modern2.jpg'
import useMediaQuery from '@/hooks/useMediaQuery';


type Props = {
    setSelectedPage : (value:SelectedPage.Modern) => void;
}


const Modern = ({setSelectedPage}: Props) => {
  
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const extraImage : React.ReactNode = (isAboveMediumScreens ? <img alt='nsx-modern' src={image2} className='p-2 rounded'/> : <div/>);
  

  return (
    <section id='modernized' className='mx-auto min-h-full w-5/6 py-20 bg-primary-500'>
        <motion.div className='md:flex items-center justify-center'
        onViewportEnter={() => setSelectedPage(SelectedPage.Modern)}>
          <motion.div className='mx-auto w-5/6'
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.5}}
          transition={{duration:0.5}}
          variants={{
            hidden: {opacity:0, x:-50},
            visible: {opacity:1, x:0}
          }}>
            <div className='mx-auto py-10 md:w-5/6 md:pl-4 text-redAccent-500 justify-center'>
              <Heading>Modernized NSX</Heading>
            </div>
            <div className='md:mx-4 px-8 pb-4 text-whiteAccent-500 justify-center'>
              <p className='py-5 ml-4 text-sm'> It's the 2022 NSX Type S sports car, which utilizes a hybrid powertrain. A twin-turbo V-6 and three electric motors team up for blistering acceleration but the system also enables quiet, electric-only driving so your neighbors don't have a cow every time you idle through your subdivision.
              </p>
            </div>
            <div className='md:flex md:mx-4 gap-4 p-4 border-spacing-2 border-whiteAccent-500 md:w-1/2'>
                <img alt='nsx-modern' src={image1} className='p-2 rounded'/>
                {extraImage}
            </div>
          </motion.div>
        </motion.div>
    </section>
  )
}

export default Modern