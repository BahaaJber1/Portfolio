import usePageTitle from "@hooks/usePageTitle";
import Container from "@ui/Container.jsx";
import HeroSection from "@ui/HeroSection.jsx";

function Home() {
    usePageTitle("Full Stack Developer");
    return (
        <Container>
            <HeroSection
                heading={[
                    "Full Stack Developer",
                    "Open Source Enthusiast",
                    "UI / UX Lover",
                ]}
                text="I'm Bahaa Jber, a passionate full-stack web developer focused on building practical, user-friendly applications. I enjoy sharing knowledge, and creating tools that make life easier for developers and everyday users alike."
                image={
                    <img src="BahaaLogo-transparent.svg" alt="Bahaa Profile" />
                }
            />
        </Container>
    );
}

export default Home;
