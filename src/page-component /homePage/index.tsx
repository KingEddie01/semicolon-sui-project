import React from 'react';
import Image from 'next/image';
import { FiCalendar } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { LuClock } from "react-icons/lu";


function HomePage() {
    return (
        <div className={'bg-gradient-to-b from-[#051027] to-[#071a3e] text-white rounded-bl-[50px]'}>
            <div className={'relative overflow-hidden px-4 py-16 sm-px-6 md:px-8'}>
                <div className={'absolute inset-0 z-0 opacity-20'}>
                    <div className={'absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-blue-600 blur-3xl'}></div>
                    <div className={'absolute right-1/4 top-1/4 h-64 w-64 rounded-full bg-cyan-600 blur-3xl'}></div>
                </div>
                <div className={'relative z-10 mx-auto max-w-6xl flex flex-col items-center'}>
                    <div className={'flex justify-center gap-4 items-center  mb-16'}>
                        <Image
                            src={'https://suihackerhouse.semicolon.africa/semicolon-logo.svg'}
                            alt={'semicolon'}
                            width={150}
                            height={30}
                        />
                        <span className={'text-xl'}>|</span>
                        <Image
                            src={'https://suihackerhouse.semicolon.africa/sui-logo.svg'}
                            alt={'sui'}
                            width={60}
                            height={10}
                        />
                    </div>
                    <div>
                        <Image src={'https://suihackerhouse.semicolon.africa/hacker-house.svg'}
                               alt={'semicolon'}
                               width={500}
                               height={300}
                        />
                    </div>
                    <div className={'flex flex-col items-center md:flex-row justify-center gap-2 md:gap-8 mb-12'}>
                        <p className={'text-semi-bold text-center text-3xl italic text-cyan-400 my-8 text-3xl font-md'}>Road
                            to Sui Overflow</p>

                    </div>
                    <div>
                        <div></div>
                    </div>
                </div>


            </div>
            <div className={'translate-y-12 mx-auto -mt-12 w-full max-w-4xl  px-4 '}>
                <div className={'flex items-center'}>
                    <div className={'rounded-xl bg-white p-6 shadow-lg '}>
                        <div className={'grid gap-6 md:gap-12 md:grid-cols-3'}>
                            <div className={"flex items-center gap-3"}>
                                <FiCalendar
                                    width={24}
                                    height={24}
                                    className={'w-10 h-10 text-blue-600 '}/>
                                <div>
                                    <p className={'text-sm text-gray-500'}>March 24-29</p>
                                    <p className={'font-semibold text-gray-800'}>2025</p>
                                </div>

                            </div>
                            <div className={"flex items-center gap-3"}>
                                <GrLocation
                                    width={24}
                                    height={24}
                                    className={'w-10 h-10 text-blue-600'}/>
                                <div>
                                    <p className={'text-sm text-gray-500'}>312 Herbert Macaulay,</p>
                                    <p className={'font-semibold text-gray-800'}>Sabo, Yaba , Lagos, Nigeria</p>
                                </div>
                            </div>
                            <div className={"flex items-center gap-3"}>
                                <LuClock
                                    width={24}
                                    height={24}
                                    className={'w-10 h-10 text-blue-600'}/>
                                <div>
                                    <p className={'text-sm text-gray-500'}>Application Deadline:</p>
                                    <p className={'font-semibold text-gray-800'}>March 12, 2025</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default HomePage;