import React from 'react'
import Link from 'next/link'

const Onboarding = () => {
    return (
        <div className='flex justify-center w-full h-screen items-center'>
            <div className='text-center'>
                <div className='mt-16'>
                    <img
                        src="/images/logo1.png"
                        alt="MC"
                        className="mx-auto md:w-[300px] w-[200px]"
                    // width={3000} 
                    // height={300} 
                    />
                </div>

                <p className='text-2xl text-center -mt-20'>Your Mental Wellness Companion</p>
                <center><em className='text-2xl text-center'>Talk it Out.. Feel Better with MindConnect.</em></center>
                <div className='flex justify-center mt-8'>
                    <Link href={"/onboarding/createImage"}><button className='md:w-64 w-64 rounded-full text-xl py-3 text-white primary'>Next</button></Link>
                </div>
                <Link href={"/onboarding/login"}><p className='primaryText text-center mt-10 font-semibold'>Login</p></Link>
            </div>
        </div>
    )
}
export default Onboarding
