import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';

const CreateImage = () => {


    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8 }}
        >
            <div className=" h-screen bg flex w-full justify-center  relative" >
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="w-full h-[85%] bg-green-500" style={{ background: "url('/images/cm.png')", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center center" }}>
                    <Link href={"/onboarding/"}><button className="rounded-full z-50 top-0 absolute md:m-8 m-2 bg-gray-200 h-9 w-9 flex justify-center items-center text-lg font-bold"><i className="ri-arrow-left-line "></i></button></Link>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                            initial={{ opacity: 0, y: 80 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 3.5 }}>
                            <div className=" ">
                                <h3 className="text-center text-4xl font-semibold primaryText">Create With </h3>
                            </div>
                            <h3 className="text-center text-4xl font-semibold primaryText">MindConnect A</h3>
                        </motion.div>
                    </div>
                </motion.div>

                <div className="w-full absolute bottom-0 ">
                    <div className='flex justify-center mt-8'>
                        <Link href={"/onboarding/grow"}><button className='md:w-64 w-64 rounded-full m-8 text-xl py-3 text-white primary'>Next</button></Link>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default CreateImage