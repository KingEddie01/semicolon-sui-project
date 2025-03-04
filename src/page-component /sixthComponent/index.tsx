import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { RiTeamFill } from 'react-icons/ri'

const SixthComponent = () => {
    return (
        <section className="relative mx-auto w-full mt-20">
            <div className='flex flex-col gap-y-6 md:flex-row md:gap-x-32 px-8 justify-center'>

                <div className="register flex flex-col items-center rounded-3xl bg-white p-8 lg:w-[300px] text-center shadow-2xl">
                    <div className="mb-4 rounded-full bg-cyan-500/20 p-4">
                        <div className="rounded-full bg-cyan-500 p-2 text-white">
                            <CgProfile className='text-green-50' size={30}/>
                        </div>
                    </div>
                    <p className="mb-6">To apply as an <span className='font-bold'>individual</span>, click the button below</p>
                    <button type='button' className="text-white inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-10 py-2 rounded-full bg-[#0A1739] px-6 hover:bg-blue-900 hover:cursor-pointer">
                        Individual
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="ml-2 h-4 w-4"
                        >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="m9 16 6-4-6-4"></path>
                        </svg>
                    </button>
                </div>
                <div className="register flex flex-col items-center rounded-3xl bg-white p-8 lg:w-[300px] text-center shadow-2xl">
                    <div className="mb-4 rounded-full bg-cyan-500/20 p-4">
                        <div className="rounded-full bg-cyan-500 p-2 text-white">
                            <RiTeamFill className='text-green-50' size={30}/>

                        </div>
                    </div>
                    <p className="mb-6">To apply as a <span className='font-bold'>Team</span>, click the button below</p>

                    <button type='button' className="text-white inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-10 py-2 rounded-full bg-[#0A1739] px-6 hover:bg-blue-900 hover:cursor-pointer">
                        Team
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="ml-2 h-4 w-4"
                        >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="m9 16 6-4-6-4"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div className='hidden md:block absolute -z-40 top-12 h-44 bg-blue-100/30 w-full'/>
            <div className="w-full mt-8 text-center px-4">
                <p className='text-sm'>
                    We will inform applicants if they were selected by{' '}
                    <span className="font-semibold">Monday, March 17, 2025</span>.
                </p>
            </div>
        </section>
    )
}

export default SixthComponent;