import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Login = () => {
    const { asPath } = useRouter();
    const string = asPath
    const str = string.split("/")
    return (
        <div>
            {
                str[1] !== "discover" ?
                    <div className="flex justify-between md:p-6 p-4">
                        <div className="w-full">
                            <Link href={"/onboarding/"}><button className="rounded-full bg-gray-200 h-8 w-8 flex justify-center items-center text-lg font-bold"><i className="ri-close-line "></i></button></Link>
                        </div>
                        <div className="w-full">
                            <p className="text-left primaryText text-xl">Account</p>
                        </div>
                    </div>
                    : ""
            }
            <div className="w-full  mt-20 flex justify-center items-center text-center h-10 ">
                <h3 className="text-2xl primaryText md:w-[80%] w-full md:m-0 m-3">Create an account or sign in to save and see your conversation history.</h3>
            </div>

            <div className="md:w-full  w-[85%] mt-10 flex justify-center items-center text-center ">
                <div className="w-full">
                    <div className="w-full mt-20  ">
                        <button className="relative primaryText text-xl py-3.5 md:w-[400px] w-full  md:mx-0 mx-5 bg-white  rounded-full border"><i className="ri-google-fill text-red-500 absolute -ml-80 text-3xl -mt-1 left-0 right-0"></i>Continue with google</button>
                    </div>
                    <div className="w-full mt-5">
                        <button className="relative  text-xl py-3.5 md:w-[400px] w-full md:mx-0 mx-5 bg-blue-500 text-white rounded-full border"><i className="ri-facebook-circle-fill text-white absolute -ml-80 text-3xl -mt-1 left-0 right-0"></i>Continue with facebook</button>
                    </div>
                    <div className="w-full mt-5">
                        <button className="relative  text-xl py-3.5 md:w-[400px] w-full md:mx-0 mx-5 bg-black text-white rounded-full border"><i className="ri-apple-fill text-white absolute -ml-80 text-3xl -mt-1 left-0 right-0"></i>Continue with apple</button>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div>
                    <div className="relative mt-10 md:w-96  w-[85%] mt-10 flex justify-center items-center text-center">
                        <div className="absolute inset-0 flex items-center" aria-hidden="true">
                            <div className="w-full border-t border-gray-200" />
                        </div>
                        <div className="relative flex justify-center text-lg font-medium bg leading-6">
                            <span className="bg-transparent px-6 text-gray-900">Or&nbsp;continue&nbsp;with</span>
                        </div>
                    </div>
                    <div className="w-full   mt-5">
                        <Link href={"/onboarding/signin"}><button className="relative w-full text-xl py-3.5   w-full px-5   primary text-white  rounded-full border">Continue with Email</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login