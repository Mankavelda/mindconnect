import React from "react";

const AccountDetail = () => {
    return (
        <div className="flex justify-center">
            <div className="text-center">
                <h3 className="primaryText text-3xl  ">Account</h3>
                <div className="mt-20">
                    <p className="text-2xl text-gray-700 font-semibold">Signed in as Velda</p>
                    <h2 className="text-[40px] primaryText mt-5">We have exchanged 2 messages!</h2>
                    <center><button className="md:w-96 w-full rounded-full border border-black text-xl primaryText py-4 mt-10">Sign Out</button></center>
                </div>
            </div>
        </div>
    )

}
export default AccountDetail
