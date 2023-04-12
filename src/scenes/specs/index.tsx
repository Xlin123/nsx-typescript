import { SelectedPage, SpecType } from '@/shared/types'
import { motion } from 'framer-motion';
import React from 'react'
import image1 from '@/assets/engineSpec.jpg'
import image2 from '@/assets/vtec.jfif'
import image3 from '@/assets/vvis.jpeg'
import image4 from '@/assets/transmission.jfif'
import image5 from '@/assets/suspension.jpg'
import image6 from '@/assets/brakes.jpg'
import Heading from '@/shared/Heading';
import Spec from './Spec';
import Scrollbar from 'react-custom-scrollbars-2'


type Props = {
  setSelectedPage: (value:SelectedPage) => void;
}


const specs : Array<SpecType> = [
  {
    name:"Engine",
    description:"The block is made of aluminum alloy with cast-in-steel cylinder liners. The crankshaft is a fully counter-weighted forged-steel unit.",
    image:image1
  },
  {
    name:"VTEC",
    description:"The heart of the VTEC system is a unique camshaft and rocker arm system. Foreach cylinder's set of two intake (or exhaust) valves, there are three corresponding lobes on the camshaft. The two outboard lobes each have a profile suited for low to mid-engine speed operation.",
    image:image2
  },
  {
    name:"VVIS",
    description:"This system uses a separate intake air plenum, located beneath the main intake manifold. This second plenum is separated from the primary manifold by six butterfly valves, which open between 4600 and 4900 rpm and are actuated by manifold vacuum.",
    image:image3
  },
  {
    name:"Transmission",
    description:"To handle the high torque and power output of the NSX engine, a twin-disc clutch was developed. The twin disc design increases the torque capacity of the unit, while retaining a light clutch feel and reducing rotating inertia.",
    image:image4
  },
  {
    name:"Suspension",
    description:"The desired goals for the NSX suspension went well beyond the typical goals of high lateral adhesion, transient response and linear response to control input. The engineers wanted a suspension that allowed the driver to easily control the car right to the limit.",
    image:image5
  },
  {
    name:"Brakes",
    description:"The NSX is equipped with 4-wheel ventilated disc brakes and dual piston steel calipers. The diameter of the front and rear discs are 282 mm (11 in.).",
    image:image6
  },
]


const Specs = ({setSelectedPage}: Props) => {
  return (
    <section id='specs' className='mx-auto min-h-full w-5/6 py-20 bg-primary-500'>
        <motion.div className='md:flex items-center justify-center'
        onViewportEnter={() => setSelectedPage(SelectedPage.Specs)}>
          <motion.div className='mx-auto w-5/6'
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.5}}
          transition={{duration:0.5}}
          variants={{
            hidden: {opacity:0, x:-50},
            visible: {opacity:1, x:0}
          }}>
            <div className='mx-auto py-10 md: w-5/6 text-redAccent-500 justify-center'>
              <Heading>Specs</Heading>
            </div>
            <div className='md:mx-4 px-8 pb-4 text-whiteAccent-500 justify-center'>
              <p className='py-5 text-center'> The intention in creating the Acura NSX was to produce a hand-built, exotic, mid-engine sports car that would establish entirely new levels of performance, refinement, driveability and reliability. The NSX is designed to represent an entirely new definition of the exotic sports car.
              The mid-engine, 2-seater NSX is powered by an all-aluminum, 3.0-liter V-6 which produces 270 hp and 210 lbs.-ft. of torque. The normally aspirated engine is equipped with dual overhead cams, four valves per cylinder, a Variable Valve Timing and Lift Electronic Control (VTEC) system, and a Variable Volume Induction System (VVIS) intake configuration.
              </p>
            </div>
          </motion.div>
          <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'>
            <Scrollbar style={{height:385}} className='z-35'>
              <ul className='w-[2800px] whitespace-nowrap'>
                {specs.map((item,index)=>(
                  <Spec
                  key={`${item.name}-${index}`}
                  name={item.name}
                  description={item.description}
                  image={item.image}/>
                ))}
              </ul> 
            </Scrollbar>
          </div>
        </motion.div>
          
    </section>
  )
}

export default Specs