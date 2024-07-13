import React, { useState } from 'react'
import Link from 'next/link'
import Switch from "react-switch";

const Onboarding = () => {
    const [enabled, setEnabled] = useState(false)
    const [state, setState] = useState(true)

    return (
        <div className='flex justify-center w-full h-screen items-center'>
            <div className=''>
                <h5 className='md:text-[300px] text-[200px]'>CM</h5>
                <p className='text-2xl text-center'>Your Mental Wellness Companion</p>
                <center><em className='text-2xl text-center'>Health Artifical Intelligent</em></center>
                {/* this is the toggler */}
                <div className='w-full flex justify-center'>
                    <div className='flex my-5 space-x-3'>
                        <p>French</p>
                        <label>
                            <Switch className='w-8 h-8 mr-5' onChange={()=>setState(!state)} checked={state} />
                        </label>
                        <p>English</p>
                    </div>
                </div>
                <div className='flex justify-center mt-8'>
                    <Link href={"/onboarding/createImage"}><button className='md:w-64 w-64 rounded-full text-xl py-3 text-white primary'>Next</button></Link>
                </div>
                <Link href={"/onboarding/login"}><p className='primaryText text-center mt-10 font-semibold'>Login</p></Link>
            </div>
        </div>
    )
}
export default Onboarding