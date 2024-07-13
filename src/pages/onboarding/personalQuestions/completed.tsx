import { motion } from "framer-motion";
import React from "react";

const CompleteSurvey = () => {
    return (
        <div className="h-screen w-full flex justify-center items-center">
            <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 3.5 }} className="text-center">
                <h3 className="text-3xl">Thank you for your responses</h3>
                <p className="text-lg">We will provide you with a specialist that best suits your needs</p>

                <p>Redirecting ....</p>
            </motion.div>
        </div>
    )
}

export default CompleteSurvey