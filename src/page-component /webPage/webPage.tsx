import React from 'react';
import HomePage from "@/page-component /homePage";
import SecondPage from "@/page-component /secondComponent";
import ThirdPage from "@/page-component /thirdComponent";
import FourthPage from "@/page-component /fourthComponent";
import FifthPage from "@/page-component /fifthComponent";
import SixthPage from "@/page-component /sixthComponent";
import Footer from "@/page-component /footer/footer";

function WebPage() {
    return (
        <div>
            <HomePage/>
            <SecondPage/>
            <ThirdPage/>
            <FourthPage/>
            <FifthPage/>
            <SixthPage/>
            <Footer/>
        </div>
    );
}

export default WebPage;