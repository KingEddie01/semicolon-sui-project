import React from 'react';
import Image from "next/image";

function Footer() {
    return (
        <div>
            <footer className="mt-12 py-12 text-white bg-[#051027]">
                <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-2">
                    <div>
                        <h4 className="mb-4 text-lg font-bold text-cyan-500">Logistics</h4>
                        <ul className="list-disc pl-5 space-y-3 text-black marker:text-blue-600">
                            <li>Accommodation will be provided for teams from outside Lagos.</li>
                            <li>Meals will be provided.</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-4 text-lg font-bold text-cyan-500">Resources and Support</h4>
                        <p className="mb-4">
                            Semicolon is providing free training on Sui Move, sponsored by the Sui Foundation.
                            It is too late to register for the current round of classes. Click on this link to register:
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://bit.ly/SC-SUI-Training"
                                className="text-cyan-500 underline">
                                https://bit.ly/SC-SUI-Training
                            </a>.
                        </p>
                        <p>
                            Semicolon is a workforce development company solving the problem of youth unemployment
                            by training software engineers and techpreneurs. Through our one-year techpreneurship program,
                            we help individuals develop the required skills to compete as software engineers in the global market.
                            To learn more about Semicolon, please visit&nbsp;
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-cyan-500 underline"
                                href="https://www.semicolon.africa">
                                https://www.semicolon.africa
                            </a>.
                        </p>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2">
                    <div>
                        <div className="mx-auto flex mt-12 max-w-6xl items-center gap-16 px-4">
                            <div>
                                <Image
                                    src="https://suihackerhouse.semicolon.africa/semicolon-logo.svg"
                                    alt="Semicolon Logo"
                                    width={120}
                                    height={30}
                                    className="w-auto h-6 object-contain bg-transparent"
                                />
                            </div>
                            <span className="text-xl">|</span>
                            <div>
                                <Image
                                    src="https://suihackerhouse.semicolon.africa/sui-logo.svg"
                                    alt="Sui Logo"
                                    width={120}
                                    height={30}
                                    className="w-auto h-6 object-contain bg-transparent"
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
