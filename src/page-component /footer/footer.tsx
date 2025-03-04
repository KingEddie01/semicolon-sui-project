import React from 'react';
import * as https from "node:https";
import Image from "next/image";

function Footer() {
    return (
        <div>
            <footer className={'mt-12 py-12 text-white bg-[#051027]'}>
                <div className={'mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-2'}>
                    <div>
                        <h4 className={'mb-4 text-lg font-bold text-cyan-500'}>Logistics</h4>
                        <ul className={'space-y-2'}>
                            <li className={'flex item-start gap-2'}>
                                <span className={'mt-1 text-cyan-500'}>.</span>
                                <span>Accommodation will be provided for teams from outside Lagos</span>
                            </li>
                            <li className={'flex item-start gap-2'}>
                                <span className={'mt-1 text-cyan-500'}>.</span>
                                <span>Meals will be provided</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className={'mb-4 text-lg font-bold text-cyan-500'}>Resources and Support</h4>
                        <p className={'mb-4'}>"Semicolon is providing free training on Sui Move, sponsored by the Sui Foundation.
                            It isn't too late to register for the current round of classes. Click on this link to register: "
                            <a target={'_blank'} href={'https://bit.ly/SC-SUI-Training'} className={'text-cyan-500 underline'}>
                                https://bit.ly/SC-SUI-Training
                            </a>
                        </p>
                        <p>
                            "Semicolon is a workforce development company that is solving the problem of youth unemployment by training
                            software engineers and techpreneurs. Through our one year techpreneurship program, we help individuals develop
                            required skills to compete as software engineers in the global market. To learn more about Semicolon,
                            please visit&nbsp;"
                            <a target={'_blank'} className={'text-cyan-500 underline'} href={'https://www.semicolon.africa'}>
                                https://www.semicolon.africa
                            </a>
                        </p>

                    </div>
                </div>

                <div className={'max-w-6xl mx-auto px-4 grid md:grid-cols-2'}>
                    <div>
                        <div className={'mx-auto flex mt-12 max-w-6xl items-center gap-16 px-4'}>
                            <div>
                                <Image
                                    src={'https://suihackerhouse.semicolon.africa/semicolon-logo.svg'}
                                    alt={'semicolon'}
                                    width={120}
                                    height={30}
                                    className={'w-auto h-6 object-contain bg-transparent'}
                                />
                            </div>
                            <span className={'text-xl'}>|</span>
                            <div>
                                <Image
                                    src={'https://suihackerhouse.semicolon.africa/sui-logo.svg'}
                                    alt={'sui'}
                                    width={120}
                                    height={30}
                                    className={'w-auto h-6 object-contain bg-transparent'}
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;