import HomeCard from "@components/bahaa/home/components/HomeCard.jsx";
import HomeHero from "@components/bahaa/home/components/HomeHero.jsx";
import usePageTitle from "@hooks/usePageTitle";
import LogoSection from "@ui/Logos.jsx";

function Home() {
    usePageTitle("Full Stack Developer");
    return (
        <>
            <HomeHero />
            <LogoSection />
            <HomeCard />
        </>
    );
}

export default Home;
