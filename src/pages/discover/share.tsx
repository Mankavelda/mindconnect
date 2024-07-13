import React from "react";
import { motion } from "framer-motion";

const Share = () => {
    return (
        <div className="w-full h-[90vh] flex justify-center">
            <motion.div
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="flex h-[80vh] w-full justify-center items-center">

                <div className="">
                    <h3 className="text-4xl primayText mb-5 text-center">Spread the word</h3>
                    <p className="text-lg text-gray-600 tex-center">Share a link to MindConnect with a friend...</p>
                    <center><button className="text-white primary px-20 py-3 rounded-md mt-10">Copy Link</button></center>
                </div>

            </motion.div>
        </div>
    )
}
export default Share
