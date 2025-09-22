import React from "react";
import Container from "./Container.jsx";
import { cn } from "@lib/utils.js";
import TextType from "@components/TextType.jsx";
import ShinyText from "@components/ShinyText.jsx";

function HeroSection({ heading, text, image }) {
    return (
        <Container
            className={cn(
                "px-5 py-30",
                image && "grid md:grid-cols-1 lg:grid-cols-2",
            )}
            initial={{ opacity: 0, scale: 0, filter: "blur(100px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0)" }}
            transition={{
                duration: 0.3,
                scale: { ease: "easeOut" },
            }}
        >
            <Container
                className={cn("justify-center", !image && "text-center")}
            >
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
                    className="mb-6 h-[120px] text-5xl font-bold md:text-6xl lg:text-7xl"
                />

                <ShinyText
                    className={cn(
                        "text-lg leading-8 text-black/70 md:text-xl lg:text-xl dark:text-white/70",
                        !image && "mx-auto max-w-3xl",
                    )}
                    speed={3}
                    text={text}
                />
            </Container>
            {image && (
                <Container className={cn("items-center")}>
                    <img
                        src={image.src}
                        alt={image.alt}
                        className={cn("w-72 md:w-96 lg:w-100")}
                    />
                </Container>
            )}
        </Container>
    );
}

export default HeroSection;
