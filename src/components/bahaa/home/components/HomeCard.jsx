import { cn } from "@lib/utils.js";
import Card from "@ui/Card.jsx";
import Container from "@ui/Container.jsx";

import { cardData } from "../constants/HomeCardConstants.jsx";

function HomeCard() {
    return (
        <Container
            className={cn("my-30 grid grid-cols-2 gap-4 md:grid-cols-4")}
        >
            {cardData.map((card, index) => (
                <Card
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    key={index}
                    title={card.title}
                    content={card.content}
                    text={card.text}
                />
            ))}
        </Container>
    );
}

export default HomeCard;
