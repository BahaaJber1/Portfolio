import { cn } from "@lib/utils.js";
import Card from "@ui/Card.jsx";
import Container from "@ui/Container.jsx";

import CountUp from "@components/CountUp.jsx";
import GradientText from "@components/GradientText.jsx";
import { cardData } from "../constants/HomeCardConstants.jsx";

function HomeCard() {
    return (
        <Container
            className={cn(
                "my-30 grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-4",
            )}
        >
            {cardData.map((card, index) => (
                <Card
                    className={cn("shadow-lg")}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    key={index}
                    title={card.title}
                    content={
                        <GradientText
                            colors={["#a294f9", "#fff", "#a294f9"]}
                            animationSpeed={5}
                        >
                            <CountUp from={0} to={card.to} />
                        </GradientText>
                    }
                    text={card.text}
                />
            ))}
        </Container>
    );
}

export default HomeCard;
