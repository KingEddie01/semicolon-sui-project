import React from 'react';
import Image from "next/image";
import { GiCheckMark } from "react-icons/gi";

function FifthPage() {
    return (
        <div>
            <section className={'mx-auto my-16 max-w-6xl px-4 py-8'}>
                <div className={'grid gap-8 md:gap-16 md:grid-cols-2'}>
                    <div className={'relative h-[300px] w-full overflow-hidden rounded-xl'}>
                       <img
                              src={'https://suihackerhouse.semicolon.africa/participation-requirement-image.png'}
                              alt={'workspace with laptop'}
                              width={500}
                              height={500}
                              className={'object-cover h-full w-full absolute left-0 top-0 right-0 bottom-0 bg-transparent'}
                       />
                    </div>
                    <div className={'space-y-4'}>
                        <h3 className={'mb-6 text-3xl font-bold text-blue-600'}>Participation Requirements</h3>
                        <div className={'flex items-center gap-3'}>
                            <div
                                className={'flex h-6 aspect-square items-center justify-center rounded-full text-white bg-cyan-500'}>
                                <GiCheckMark/>
                            </div>
                            <p>
                                "Teams must be physically present at the value in Lagos throughout the duration of the
                                hacker house ("March 24-29)"
                                "
                            </p>

                        </div>
                        <div className={'flex items-center gap-3'}>
                            <div
                                className={'flex h-6 aspect-square items-center justify-center rounded-full text-white bg-cyan-500'}>
                                <GiCheckMark/>
                            </div>
                            <p>
                                "Teams should ensure that they can be fully engaged and attentive to their project
                                throughout the period "

                            </p>

                        </div>
                        <div className={'flex items-center gap-3'}>
                            <div
                                className={'flex h-6 aspect-square items-center justify-center rounded-full text-white bg-cyan-500'}>
                                <GiCheckMark/>
                            </div>
                            <p>
                                "All participant will be required to adhere to the event guidelines and code of conduct"

                            </p>

                        </div>
                        <div className={'flex items-center gap-3'}>
                            <div
                                className={'flex h-6 aspect-square items-center justify-center rounded-full text-white bg-cyan-500'}>
                                <GiCheckMark/>
                            </div>
                            <p>
                                "Intellectual property created by Teams during the hacker house will be retained by those teams"
                            </p>

                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}

export default FifthPage;