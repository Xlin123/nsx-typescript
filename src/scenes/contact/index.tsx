import Heading from '@/shared/Heading';
import { SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion';
import React from 'react'
import image from '@/assets/contact.jpg'
import { useForm } from 'react-hook-form';



type Props = {
    setSelectedPage : (value:SelectedPage.ContactUs) => void;

}

const ContactUs = ({setSelectedPage}: Props) => {
    const inputStyles = `w-full rounded-lg bg-secondary-500 px-5 py-3 my-5`;
    const {
        register,
        trigger,
        formState : {errors}
    } = useForm();
    
    const onSubmit =async (e:any) => {
        const isValid = await trigger();
        if(!isValid){
            e.preventDefault();
        }
    };



  return (
    <section id='ContactUs' className='mx-auto w-5/6 pt-24 pb-32'>
        <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
            <motion.div
            className='w-full '
            initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.5}}
          transition={{duration:0.5}}
          variants={{
            hidden: {opacity:0, x:-50},
            visible: {opacity:1, x:0}
          }}>            
            <Heading>
                <span className='text-whiteAccent-400'>JOIN NOW</span> TO KEEP UPDATED
            </Heading>
            <p className='my-5 w-5/6'>
                Stay in contact with us and if you have any inquiries/bugs please feel free to let me know.
            </p>
            </motion.div>

          <div className='mt-10 justify-between gap-8 md:flex'>
            <motion.div className='mt-10 basis-3/5 md:mt-0'
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{duration:0.5}}
            variants={{
              hidden: {opacity:0, y:50},
              visible: {opacity:1, y:0}
            }}>
                <form 
                target='_blank' 
                onSubmit={onSubmit}
                method='POST'
                action='bbb369b767eca08faf60cada761a3332'
                >
                    <input className={inputStyles} type='text' placeholder='NAME' {...register("name", {
                        required:true, 
                        maxLength:100
                    })}/>
                    {errors.name && (
                        <p className='mt-1 text-primary-100 '>
                            {errors.name.type === "required" && "This field is required."}
                            {errors.name.type === "maxLength" && "Max Length is 100 Characters."}
                        </p>
                    )}

                    <input className={inputStyles} type='text' placeholder='EMAIL' {...register("email", {
                        required:true, 
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    })}/>
                    {errors.email && (
                        <p className='mt-1 text-primary-100 '>
                            {errors.email.type === "required" && "This field is required."}
                            {errors.email.type === "pattern" && "Invalid email address."}
                        </p>
                    )}

                    <input className={inputStyles} type='text' placeholder='MESSAGE' {...register("message", {
                        required:true, 
                        maxLength:100
                    })}/>
                    {errors.message && (
                        <p className='mt-1 text-primary-100 '>
                            {errors.message.type === "required" && "This field is required."}
                            {errors.message.type === "maxLength" && "Max Length is 100 Characters."}
                        </p>
                    )}

                    <button type='submit' 
                    className='my-5 rounded-lg bg-secondary-300 text-primary-600 px-20 py-3 transition duration-500 hover:text-white'>
                    SUBMIT
                    </button>
                </form>
            </motion.div>
            <div className='mx-auto basis-3/5'>
                <img alt='bingbong' src={image}/>
            </div>
          </div>

        </motion.div>
    </section>
  );
}

export default ContactUs