import React from 'react';

const ThirdPage = () => {
    return (
        <div className="grid justify-center md:grid-cols-2 md:mb-16">
            <div className="bg-blue-100 py-16 px-8">
                <h2 className="text-2xl font-bold text-blue-600 mb-6">Features of the Hacker House</h2>
                <ul className="list-disc pl-5 space-y-3 text-black marker:text-blue-600">
                    <li>Brainstorming and Ideation sessions</li>
                    <li>Workshops and Tutorials</li>
                    <li>Coaching and Mentorship from Move Experts, including the Sui Foundation Head of Developer Relations</li>
                    <li>Access to Resources</li>
                    <li>Networking Opportunities</li>
                    <li>Solution Demonstration</li>
                </ul>
            </div>
            <div className="bg-blue-50 py-16 px-8">
                <h2 className="text-2xl font-bold text-blue-600 mb-6 ">Benefits for Participating Teams</h2>
                <ul className="list-disc pl-5 space-y-3 text-black marker:text-blue-600">
                    <li>Access Mentorship & Coaching</li>
                    <li>Engage with Sui Foundation</li>
                    <li>Hands-On Learning</li>
                    <li>Strengthen solutions that can be used to compete in global hackathons, enter accelerator programs, and become viable businesses</li>
                    <li>Connect with other developers & potential mentors and partners</li>
                    <li>All participants who successfully complete the Hacker House are eligible for a reward worth the equivalent of $100.</li>
                    <li>Participants will build robust solutions using Sui and prepare for the Sui Overflow 2025 Hackathon, a virtual global competition with over $500,000 in combined prizes.</li>
                </ul>
            </div>
        </div>
    );
};

export default ThirdPage;
