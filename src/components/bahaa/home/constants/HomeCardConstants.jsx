import CountUp from "@components/CountUp.jsx";
import GradientText from "@components/GradientText.jsx";

const cardData = [
    {
        title: "Years of Experience",
        content: (
            <GradientText
                colors={["#a294f9", "#fff", "#a294f9"]}
                animationSpeed={5}
            >
                <CountUp from={0} to={2} />+
            </GradientText>
        ),
        text: "Years",
    },
    {
        title: "Hours of Coding",
        content: (
            <GradientText
                colors={["#a294f9", "#fff", "#a294f9"]}
                animationSpeed={5}
            >
                <CountUp from={0} to={10000} />+
            </GradientText>
        ),
        text: "Hours",
    },
    {
        title: "Days Learning",
        content: (
            <GradientText
                colors={["#a294f9", "#fff", "#a294f9"]}
                animationSpeed={5}
            >
                <CountUp from={0} to={1200} />+
            </GradientText>
        ),
        text: "Days",
    },
    {
        title: "Projects Completed",
        content: (
            <GradientText
                colors={["#a294f9", "#fff", "#a294f9"]}
                animationSpeed={5}
            >
                <CountUp from={0} to={20} />+
            </GradientText>
        ),
        text: "Projects",
    },
    {
        title: "Lines of Code",
        content: (
            <GradientText
                colors={["#a294f9", "#fff", "#a294f9"]}
                animationSpeed={5}
            >
                <CountUp from={0} to={100000} />+
            </GradientText>
        ),
        text: "Lines",
    },
    {
        title: "Coffees Consumed",
        content: (
            <GradientText
                colors={["#a294f9", "#fff", "#a294f9"]}
                animationSpeed={5}
            >
                <CountUp from={0} to={500} />+
            </GradientText>
        ),
        text: "Coffees",
    },
    {
        title: "GitHub Commits",
        content: (
            <GradientText
                colors={["#a294f9", "#fff", "#a294f9"]}
                animationSpeed={5}
            >
                <CountUp from={0} to={1000} />+
            </GradientText>
        ),
        text: "Commits",
    },
    {
        title: "Certificates Earned",
        content: (
            <GradientText
                colors={["#a294f9", "#fff", "#a294f9"]}
                animationSpeed={5}
            >
                <CountUp from={0} to={5} />+
            </GradientText>
        ),
        text: "Certificates",
    },
];

export { cardData };
