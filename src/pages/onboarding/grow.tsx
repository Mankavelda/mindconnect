import Link from "next/link";
import React from "react";
import { motion, AnimatePresence } from 'framer-motion';

const Grow = () => {
    return (
        <>
            <div className="p-5 h-screen bg flex w-full justify-center items-center relative">
            <Link href={"/onboarding/createImage"}><button className="rounded-full z-50 top-0 absolute md:m-8 m-2 bg-gray-200 h-9 w-9 flex justify-center items-center text-lg font-bold"><i className="ri-arrow-left-line "></i></button></Link>
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 3.5 }} 
                    className="w-full ">
                   
                    <h3 className="text-center text-4xl font-semibold primaryText">Grow with</h3>
                    <h3 className="text-center text-4xl font-semibold primaryText">MindConnect AI</h3>
                </motion.div>

                <div className="w-full absolute bottom-0 ">
                    <div className='flex justify-center mt-8'>
                        <Link href={"/onboarding/name"}><button className='md:w-64 w-64 rounded-full m-8 text-xl py-3 text-white primary'>Next</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Grow