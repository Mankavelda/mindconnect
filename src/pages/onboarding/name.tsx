import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Name = () => {
    return (
        <>
            <div className="p-5 bg h-screen flex w-full justify-center  relative">
                <div className="w-full">
                    <Link href={"/onboarding/grow"}><button className="rounded-full top-0 absolute md:m-8 m-2 bg-gray-200 h-9 w-9 flex justify-center items-center text-lg font-bold"><i className="ri-arrow-left-line "></i></button></Link>
                    <div className="flex justify-center">
                        <motion.div 
                        initial={{ opacity: 0, y: 160 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 3.5 }}
                            className="md:w-[60%] mt-20 w-[95%]">
                            <h3 className="text-4xl font-semibold primaryText">Hello! I am mind Connect.</h3>
                            <h3 className="text-4xl font-semibold primaryText">What is your name?</h3>
                            <p className="text-xl text-gray-500 ">I take data privacy seriously. Our chats stay between us. </p>
                            <p className="text-xl text-gray-500 ">We never share your data for ads or marketing.</p>
                            <div className="relative rounded-2xl mt-20   w-full h-8  shadow-md ">
                                <input className="w-full pl-6 shadow-md py-4 border  rounded-3xl outline-none" type="text" placeholder="Your preferred name" />
                                <Link href={"/onboarding/discussion"}><button className="h-8 w-8 flex justify-center items-center  top-0 right-1 px-4 rounded-full mr-2   mt-[12px]  text-white bg-gray-200 absolute
                "><i className="ri-arrow-up-line text-white"></i></button></Link>
                            </div>
                        </motion.div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Name