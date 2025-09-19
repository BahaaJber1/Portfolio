import HeroSection from "@ui/HeroSection.jsx";
import { headingItems, text, image } from "../constants/heroConstants.js";
import LogoSection from "@ui/Logos.jsx";

function Hero() {
    return (
        <>
            <HeroSection heading={headingItems} text={text} image={image} />
            <LogoSection />
        </>
    );
}

export default Hero;
