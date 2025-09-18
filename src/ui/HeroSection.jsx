import React from "react";
import Container from "./Container.jsx";
import { cn } from "@lib/utils.js";
import TextType from "@components/TextType.jsx";

function HeroSection({ heading, text, image }) {
    return (
        <Container
            className={cn(
                "mx-auto grid w-full max-w-7xl px-5 py-30 md:grid-cols-1 lg:grid-cols-2",
            )}
        >
            <Container className={cn("gap-10")}>
                <TextType
                    text={heading}
                    as="h1"
                    typingSpeed={50}
                    initialDelay={0}
                    pauseDuration={1500}
                    deletingSpeed={30}
                    showCursor={true}
                    startOnVisible={true}
                    loop={true}
                    cursorCharacter="_"
                    className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl"
                />

                <p className="leading-8 text-black/70 dark:text-white/70">
                    {text}
                </p>
            </Container>
            <Container className={cn("flex-row justify-center")}>
                {image || "Hello"}
            </Container>
        </Container>
    );
}

export default HeroSection;
