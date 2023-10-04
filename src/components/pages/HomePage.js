import React from "react"
import Layout from "../layout/Layout"
import AboutSection from "../sections/AboutSection"
import ServicesSection from "../sections/ServicesSection" 
import CaseStudiesSection from "../sections/CaseStudiesSection"
import ContactSection from "../sections/ContactSection"
import HeroSection from "../sections/HeroSection"
import WhyUsSection from "../sections/WhyUsSection"

const HomePage = () => {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <WhyUsSection />
            <CaseStudiesSection />
            <ContactSection />
        </>
    )
}

export default HomePage