import HeroSection from "@ui/HeroSection.jsx";
import { headingItems, image, text } from "../constants/heroConstants.js";

function Hero() {
    return (
        <>
            <HeroSection heading={headingItems} text={text} image={image} />
        </>
    );
}

export default Hero;
