import Hero from "@components/bahaa/home/Hero.jsx";
import usePageTitle from "@hooks/usePageTitle";
import Container from "@ui/Container.jsx";
import HeroSection from "@ui/HeroSection.jsx";

function Home() {
    usePageTitle("Full Stack Developer");
    return (
        <Container>
            <Hero />
        </Container>
    );
}

export default Home;
