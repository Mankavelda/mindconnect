import { motion } from "framer-motion";
import React, { useEffect, useMemo, useState } from "react";
import GeneralDetails from "./generalDetails";
import useStore from "@/json/store";
import PhysicalHealth from "./physicalHealth";
import Menalts from "./menalts";
import SELF from "./selfAnalaysis";
import Specialist from "./specialist";
import CompleteSurvey from "./completed";
import { useRouter } from "next/router";
const PersonalQuestions = () => {
    const router = useRouter()
    const [question, setQuestion] = React.useState<number>(1);
    const [isAnimating, setIsAnimating] = React.useState(false);
    const [congrats, setCongrats] = useState(false)


    const sharedDataFromStore = useStore((state) => state.sharedData);
    const [sharedData, setSharedData] = useState<string | null>(null);

    useEffect(() => {
        // Update the local state when sharedDataFromStore changes
        setSharedData(sharedDataFromStore);
        sharedData == "general" ? setQuestion((prev) => prev + 1) : sharedData == "physical" ? setQuestion((prev) => prev + 1) : sharedData == "menalts" ? setQuestion((prev) => prev + 1) : sharedData == "selfanalysis" ? setQuestion((prev) => prev + 1) : sharedData == "specialist" ? setQuestion((prev) => prev + 1) : ''

        if (question >= 5) {
            setTimeout(() => {
                router.push('/onboarding/name')
            }, 3000); // Adjust the duration of the animation
        }
    }, [sharedDataFromStore, sharedData]);



    return (
        <div className="flex justify-center w-full overflow-y-hidden  overflow-x-hidden h-screen items-center">
            <div className="w-full md:w-[40%] px-3">
                {question <= 5 ? <div className="w-full flex justify-between space-x-1">
                    {[1, 2, 3, 4, 5].map((index) => (
                        <motion.div
                            key={index}
                            className={`w-full h-1 ${question < index ? 'bg-gray-500 w-[50%]' : question == index ? 'rounded-full bg-green-500' : 'bg-green-500 w-[50%]'}`}
                            animate={{ backgroundColor: isAnimating && question === index ? "red" : "" }}
                        />
                    ))}
                </div> : ""}
                <div className="mt-5 h-[60vh] w-full items-center justify-center flex ">
                    {[1, 2, 3, 4, 5].map((index) => (
                        <motion.div
                            key={index}
                            className={`${question === index ? 'block' : 'hidden'} w-full h-[100%]`}
                            initial={{ x: question === index ? 0 : "40%" }}
                            animate={{ x: question === index ? 0 : "80%" }}
                            transition={{ duration: 0.5 }}
                        >
                            {
                                index == 1 ? <GeneralDetails /> : index == 2 ? <PhysicalHealth /> : index == 3 ? <Menalts /> : index == 4 ? <SELF /> : index == 5 ? <Specialist /> : ''
                            }
                        </motion.div>

                    ))}
                    {question > 5 ? <CompleteSurvey /> : ""}
                </div>
            </div>
        </div>
    );
};

export default PersonalQuestions;
