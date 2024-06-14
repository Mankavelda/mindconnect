import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { data } from "@/json/data";


const Discussion = () => {
    return (
        <div className="h-screen flex justify-center w-full ">
            <div className="md:w-[40%]  mt-10 w-[90%]">
                <div className="h-[85vh]  relative overflow-y-auto scroll">
                    <div className="grid md:grid-cols-2 grid-cols-2  md:gap-3 gap-1">

                        {
                            data.map((items, id: number) => {
                                return (
                                    <motion.div
                                        whileHover={{ scale: 0.9 }}
                                        initial={{ opacity: 0, y: 100 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: (id / 2) + 0.5 }}
                                        key={id}
                                        className="w-full h-48 flex cursor-pointer relative justify-center items-center border rounded-xl" style={{ background: `url(${items.img})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                                        <p className="text-[20px] text-white px-4 z-50">{items.text}</p>
                                        <div className="absolute inset-0">
                                            <div className="h-full bg-gradient-to-b from-transparent to-black">
                                            </div>
                                        </div>
                                    </motion.div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='flex justify-center mt-2'>
                    <Link href={"/discover/"}><button className='w-full px-8 rounded-full text-xl py-3 primaryText bg-white  border border-gray-500'>I have gotten my topic already</button></Link>
                </div>
            </div>
        </div>
    )
}
export default Discussion