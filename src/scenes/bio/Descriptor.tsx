import { motion } from 'framer-motion';
import React from 'react'

type Props = {
    picture:string,
    title:string,
    body:string, 
    link:React.ReactNode;
}

const childVariant = {
  hidden:{ opacity:0, scale: 0.9},
  visible:{opacity:1, scale:1} 
}

const Descriptor = ({picture, title, body, link}: Props) => {
  return (
    <motion.div className='mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center md:h-3/5'
    variants={childVariant}
    >
        <div className='mb-4 flex justify-center'>
            <div className='rounded-sm border-redAccent-500'>
                <img alt='' src={picture} className="flex basis-2/5 p-4"></img>
            </div>
        </div>
        <h4 className='font-bold text-lg'>{title}</h4>
        <p className='my-3 text-whiteAccent-500 text-md'>{body}</p>
        {link}
    </motion.div>
  )
}

export default Descriptor