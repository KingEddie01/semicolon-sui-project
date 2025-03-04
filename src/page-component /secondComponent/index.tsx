import React from 'react';
import Image from "next/image";

function SecondPage() {
    return (
        <div>
            <section className={'mx-auto my-16 max-w-6xl px-4 py-8'}>
                <div className={'grid gap-8 md:grid-cols-2 '}>
                    <div className={'relative '}>
                        <div className={'absolute top-5 left-0 rounded-xl bg-white p-2 shadow-lg'}>
                            <p className={'text-sm font-medium text-gray-800'}>Web 3.0</p>
                        </div>
                        <div className={'relative w-full max-w-[350px] aspect-square rounded-full overflow-hidden bg-[#0a1739]'}>
                            <Image
                                 src={'https://suihackerhouse.semicolon.africa/about-sui-image.svg'}
                                 alt={'smiling lady'}
                                 className={'absolute top-0 left-0 right-0 bottom-0 object-cover bg-transparent h-full w-full'}
                                 height={600}
                                 width={600}
                            />

                        </div>
                        <div className={'absolute -bottom-3 right-48 rounded-xl bg-white p-2 shadow-lg'}>
                            <p className={'text-sm font-medium text-gray-800'}>Blockchain Tech</p>
                        </div>
                    </div>
                    <div>
                        <h2 className={'mb-6 text-2xl font-bold text-blue-600'}>About SUI Lagos Hacker House</h2>
                        <p className={'mb-4'}>
                            <span className={'font-semibold text-blue-600'}>SUI Lagos Hacker House</span>
                            " is a 6-day event that is designed to bring together
                            developers, engineers, builders, innovators, and blockchain enthusiasts who are
                            interested in building on the Sui blockchain."
                        </p>
                        <p className={'mb-4'}>
                            "The event will feature workshops, mentorship, and coaching sessions, hacking amd networking
                            opportunities to encourage innovation and collaboration. Attendees will learn about the Sui blockchain,
                            develop skills to build robust solutions using Sui and prepare for the "

                            <a className={'font-semibold text-blue-600 underline cursor-pointer'} target={'_blank'}>Sui Overflow 2025 hackathon</a>
                            ", a global competition with over $500,000 in combined prizes.
                        </p>
                        <p className={'mb-4'}>
                            "The Sui Lagos Hacker house is implemented by"
                            <a className={'font-semibold text-blue-600 underline'} target={'_blank'}>&nbsp;Semicolon&nbsp;</a>
                            "and sponsored by" <a className={'font-semibold text-blue-600 underline cursor-pointer'} target={'_blank'}>
                            &nbsp;Sui Foundation</a>

                        </p>
                    </div>

                </div>

            </section>
        </div>
    );
}

export default SecondPage;