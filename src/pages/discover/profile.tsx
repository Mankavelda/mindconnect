import React from "react";
import useStore from "@/json/store";

const Profile = () => {
    const setSharedData = useStore((state) => state.setSharedData);

    const handleDataTransfer = (data: any) => {
        const dataToSend = data;
        setSharedData(dataToSend);
    };
    return (
        <div className="w-full  ">
            <div className="mt-10 px-10">
                <h3 className="text-2xl primaryText font-semibold">Velda</h3>
                <div className="mt-5 w-full">
                    <div className="flex py-2 mt-4 justify-between cursor-pointer">
                        <div className="flex space-x-2" onClick={()=>handleDataTransfer("account")}>
                            <i className="r-user-line "></i>
                            <p className="text-xl primaryText">Account</p>
                        </div>
                        <div>
                            <i className="ri-arrow-right-s-line text-3xl text-gray-500"></i>
                        </div>
                    </div>
                    <div className="flex mt-4 py-2 justify-between cursor-pointer">
                        <div className="flex space-x-2" onClick={()=>handleDataTransfer("share")}>
                            <i className="r-share-forward-line "></i>
                            <p className="text-xl primaryText">Share MC AI with others</p>
                        </div>
                        <div>
                            <i className="ri-arrow-right-s-line text-3xl text-gray-500"></i>
                        </div>
                    </div>
                    <div className="flex mt-4 py-2 justify-between cursor-pointer" >
                        <div className="flex space-x-2" onClick={()=>handleDataTransfer("privacy")}>
                            <i className="r-secure-payment-line "></i>
                            <p className="text-xl primaryText">Privacy Policy</p>
                        </div>
                        <div>
                            <i className="ri-arrow-right-s-line text-3xl text-gray-500"></i>
                        </div>
                    </div>
                    <div className="flex mt-4 py-2 justify-between cursor-pointer" >
                        <div className="flex space-x-2" onClick={()=>handleDataTransfer("terms")}>
                            <i className="r-file-text-line "></i>
                            <p className="text-xl primaryText">Terms of Service</p>
                        </div>
                        <div>
                            <i className="ri-arrow-right-s-line text-3xl text-gray-500"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile