import React from "react";
import { motion } from "framer-motion";
import { data } from "@/json/data";

const Images = () => {

    return (
        <div className="h-[98vh] overflow-y-auto scroll">
            <h3 className="text-2xl my-5">Good morning Jamison</h3>
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
    )
}

export default Images