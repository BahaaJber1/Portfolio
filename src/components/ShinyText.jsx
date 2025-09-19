import { useSelector } from "react-redux";

const ShinyText = ({ text, disabled = false, speed = 5, className = "" }) => {
    const darkMode = useSelector((state) => state.darkMode.darkMode);
    const animationDuration = `${speed}s`;

    // Different shine colors for light and dark mode
    const shineColor = darkMode
        ? "rgba(255, 255, 255, 0.8)"
        : "rgba(0, 0, 0, 0.6)";

    return (
        <p
            className={`${disabled ? "" : "animate-shine"} ${className}`}
            style={{
                backgroundImage: `linear-gradient(120deg, transparent 40%, ${shineColor} 50%, transparent 60%)`,
                backgroundSize: "200% 100%",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                animationDuration: animationDuration,
            }}
        >
            {text}
        </p>
    );
};

export default ShinyText;
