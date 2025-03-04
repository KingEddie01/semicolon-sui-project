import React from 'react';
import { GoPeople } from "react-icons/go";
import {IoArrowForwardCircleOutline} from "react-icons/io5";


function SixthPage() {
    return (
        <div>
            <section className={'px-4 py-12'}>

                    <div className={'flex flex-col items-center bg-blue-100  p-8 rounded-xl text-center max-w-xl mx-auto '}>
                        <div className={'mb-4 rounded-full bg-cyan-500/20 p-4'}>
                            <div className={'rounded-full bg-cyan-500 p-2 text-white'}>
                                <GoPeople
                                    width={24}
                                    height={24}

                                />
                            </div>

                        </div>
                        <p className={'mb-6'}>To apply click the button below:</p>
                        <button
                            className={"inline-flex items-center justify-center whitespace-nowrap py-2 px-6 rounded-full h-10 bg-[#0A1739] text-white hover:bg-blue-900 hover:cursor-pointer "}>Apply
                            <IoArrowForwardCircleOutline
                                width={24}
                                height={24}
                                className={'ml-2 h-4 w-4 items-center'}
                            />

                        </button>
                    </div>

                <div className={'mt-8 text-center'}>
                    <p>"We will inform applicant if they are selected by"
                        <span className={'font-semibold'}> Monday, March 17, 2025</span>"."
                    </p>
                </div>
            </section>
        </div>
    );
}

export default SixthPage;