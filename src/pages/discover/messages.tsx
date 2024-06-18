import React, { useState } from "react";
import { motion } from "framer-motion";
const Messages = () => {
    const [mute, setMute] = useState(false)
    return (
        <div className="h-[85vh]  md:px-[200px] overflow-flow-auto over flex justify-auto">
            <div>
                <div className="flex">
                    <div className="h-[75vh] overflow-flow-auto scroll">
                        <div className="mt-20">
                            <motion.div
                                initial={{ opacity: 0, y: 80 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.0 }}
                            >
                                <h3

                                    className="text-[25px] primaryText">Hey there, great to meet you. I am Pi, your personal AI.
                                    My goal is to be useful, friendly and fun. Ask me for advice, for answers, or lets talk about whatever is on your mind.</h3>
                            </motion.div>
                        </div>
                        <div className="">

                            {/* Messages here donot forget your messsages at the right and chatgpt at the letf */}
                        </div>
                    </div>
                    <div>
                        <div className="mt-20 md:ml-1 absolute right-0 m-5">
                            {
                                !mute ? <div onClick={() => setMute(!mute)} className="h-10 w-10 rounded-full bg-gray-200 text-gray-500 text-xl cursor-pointer flex justify-center items-center">
                                    <i className="ri-volume-mute-line"></i>
                                </div> : <div onClick={() => setMute(!mute)} className="h-10 w-10 rounded-full bg-gray-200 text-gray-500 text-xl cursor-pointer flex justify-center items-center">
                                    <i className="ri-volume-up-line"></i>
                                </div>
                            }
                        </div>
                    </div>
                </div>
                <div className="flex"><div className="relative rounded-2xl    w-full h-8  shadow-md ">
                    <input className="w-full pl-6 shadow-md py-4 border  rounded-3xl outline-none" type="text" placeholder="Your preferred name" />
                    <button className="h-8 w-8 flex justify-center items-center  top-0 right-1 px-4 rounded-full mr-2   mt-[12px]  text-white bg-gray-200 absolute
                "><i className="ri-arrow-up-line text-white"></i></button>
                </div>
                    <i className="ri-mic-line text-3xl text-gray-500 mt-3 ml-3 cursor-pointer"></i></div>
            </div>

        </div>
    )
}

export default Messages