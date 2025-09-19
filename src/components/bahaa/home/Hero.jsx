import HeroSection from "@ui/HeroSection.jsx";

const headingItems = [
    "Full Stack Developer",
    "Open Source Enthusiast",
    "UI / UX Lover",
    "Tech Blogger",
    "Lifelong Learner",
    "JavaScript Ninja",
    "React Expert",
    "Node.js Developer",
    "CSS Wizard",
    "Problem Solver",
    "Creative Thinker",
    "Team Player",
    "Community Builder",
    "Clean Code Advocate",
    "Performance Optimizer",
];

const text =
    "I'm Bahaa Jber, a passionate full-stack web developer focused on building practical, user-friendly applications. I enjoy sharing knowledge, and creating tools that make life easier for developers and everyday users alike.";

const image = {
    src: "BahaaLogo-transparent.svg",
    alt: "Bahaa Profile",
};

function Hero() {
    return (
        <>
            <HeroSection heading={headingItems} text={text} image={image} />
        </>
    );
}

export default Hero;
