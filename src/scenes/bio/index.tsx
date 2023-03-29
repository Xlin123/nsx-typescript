import React from 'react'
import {
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon
} from '@heroicons/react/24/solid';
import { DescriptionType, SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import Heading from '@/shared/Heading';
import Descriptor from './Descriptor';
import pininfarinaPicture from "@/assets/pininfarina.jpg";
import acuraPicture from "@/assets/acurahonda.jpg";
import interiorPicture from "@/assets/nsxInterior.png";

const descriptions: Array<DescriptionType> = [
    {
        picture: pininfarinaPicture,
        title: "HP-X Honda Pininfarina",
        body: "The Honda Pininfarina eXperimental was a concept car of an extremely aerodynamic sport berlinetta. Developed with the help of Pininfarina.",
        link: <u><a href='https://web.archive.org/web/20070927010111/http://www.pininfarina.com/index/storiaModelli/modelli.html?scheda.php%3Fid=36&cmp=anno&ord=desc&sl=0&ids=1a6cbefaafe007a7d9b765f7b345b49f'>Learn More</a></u>
    },
    {
        picture: acuraPicture,
        title: "Acura NSX vs Honda NSX",
        body: "In North America, the NSX was advertised as an Acura, Honda's Luxury Brand. While it was advertised everywhere else as Honda NSX.",
        link: <u><a href='https://garagedreams.net/car-facts/honda-nsx-vs-acura-nsx-whats-the-difference'>Learn More</a></u>
    },
    {
        picture: interiorPicture,
        title: "Honda vs Ferrari",
        body: "The NSX is one of the most famous models that Japanese Engineers made in order to compete with the world's supreme brands of supercars.",
        link: <u><a href='https://dyler.com/blog/403/honda-nsx-how-the-japanese-made-a-competitor-for-ferrari-part-i'>Learn More</a></u>
    }
];

const container = {
    hidden: {},
    visible: {
        transition:{staggerChildren:0.2}
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Bio = ({setSelectedPage}: Props) => {
  return (
    <section id='bio' className='mx-auto min-h-full w-5/6 py-20'>
        <motion.div className=''
        onViewportEnter={() => setSelectedPage(SelectedPage.Bio)}>
            <motion.div className='md:my-5 md:w-full md:px-20'
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{duration:0.5}}
            variants={{
              hidden: {opacity:0, x:-50},
              visible: {opacity:1, x:0}
            }}>
                <Heading>The Story</Heading>
                <p className='my-5 text-sm text-whiteAccent-500 text-center'>
                The Honda NSX, marketed in North America as the Acura NSX, is a two-seat, mid-engined coupe sports car manufactured by Honda.
The origins of the NSX trace back to 1984, with the HP-X Honda Pininfarina eXperimental concept, which was a mid-engine 3.0 L V6 engine rear wheel drive sports car. Honda committed to the project, with the intention of meeting or exceeding the performance of the then V8 engine Ferrari range, while offering reliability and a lower price point. The concept thus evolved and had its name changed to NS-X, which stood for "New", "Sportscar" "eXperimental", although the production model was launched as the NSX.
                </p>
            </motion.div>

            {/*More*/}
            <motion.div 
            className='mt-5 items-center justify-between gap-8 md:flex'
            initial="hidden"
            whileInView="visible"
            viewport={{once:true, amount:0.2}}
            variants={container}
            >
                {descriptions.map((description : DescriptionType) => (
                    <Descriptor
                        key={description.title}
                        picture={description.picture}
                        title={description.title}
                        body={description.body}
                        link={description.link}
                    />
                ))}
            </motion.div>
        </motion.div>
    </section>
  )
};

export default Bio;