import { useState } from "react";
import logo from "../assets/logo.png";
import Navbar from "../components/navbar/Navbar";
import HeaderSection from "../components/headerSection/HeaderSection";
import ProblemSection from "../components/problemSection/ProblemSection";
import BeneficiosSection from "../components/beneficiosSection/beneficiosSection";
import FormsSection from "../components/formsSection/FormsSection";
import VideoSection from "../components/videoSection/VideoSection";

function IndexPage() {
    return(
        <>
        <div>
            <Navbar />
            <HeaderSection />
            <ProblemSection />
            <BeneficiosSection />
            <VideoSection />
        </div>
            <FormsSection />
        </>
    );
}

export default IndexPage;