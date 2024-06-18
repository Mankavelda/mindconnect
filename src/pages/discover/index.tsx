import React, { useEffect, useState } from "react";
import Images from "./images";
import Messages from "./messages";
import Profile from "./profile";
import { motion } from "framer-motion";
import Login from "../onboarding/login";
import useStore from "@/json/store";
import Share from "./share";
import Privacy from "./privacy";
import Terms from "./terms";
import AccountDetail from "./accountDetails";

const Discover = () => {
    const [discover, setDiscover] = useState(false)
    const [active, setActive] = useState("")
    const [profile, setProfile] = useState(false)
    const [principle, setPrinciple] = useState("")
    // const setSharedData = useStore((state) => state.setSharedData);
    const sharedDataFromStore = useStore((state) => state.sharedData);
    const [sharedData, setSharedData] = useState<string | null>(null);

    useEffect(() => {
        // Update the local state when sharedDataFromStore changes
        console.log(sharedDataFromStore)
        setSharedData(sharedDataFromStore);
    }, [sharedDataFromStore]);

    const handle = () => {
        const setSharedData = useStore((state) => state.setSharedData);

    }
    return (
        <div className="w-full bg h-[100vh] flex">
            <div className="md:w-[7%] sidebg md:block hidden p-2 h-[100vh] border border-r">
                <div onClick={() => { setDiscover(!discover); setProfile(false); setActive("discover"); setSharedData("message") }} className={`${discover ? "bg-gray-100" : ""} flex rounded-md cursor-pointer p-3  justify-center`}>
                    <div className="text-center">
                        <i className="ri-planet-line text-2xl"></i>
                        <p className="text-xl">Discover</p>
                    </div>
                </div>
                <div onClick={() => { setProfile(!profile); setActive("profile"); setDiscover(false); setSharedData("message") }} className={`${profile ? "bg-gray-100" : ""} flex mt-3 rounded-md cursor-pointer p-3  justify-center`}>
                    <div className="text-center">
                        <i className="ri-user-fill text-gray-700 text-xl"></i>
                        <p className="text-xl">Profile</p>
                    </div>
                </div>
            </div>
            <div id="hide" className={`${discover || profile ? "block md:w-[25%]" : "hidden"} hide  p-2`}>
                {
                    active == "discover" ? <Images /> : active == "profile" ? <Profile /> : ""
                }
            </div>
            <div className={` ${discover ? "md:w-[68%]" : "md:w-full"} border border-l   p-3`}>
                {
                    sharedData == "account" ? /*<Login />*/ <AccountDetail /> : sharedData == "share" ? <Share /> : sharedData == "privacy" ? <Privacy /> : sharedData == "terms" ? <Terms /> : <Messages />
                }
            </div>
        </div>
    )
}
export default Discover