import {
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
    Card as SCard,
} from "@components/ui/card.jsx";
import { cn } from "@lib/utils.js";
import Container from "./Container.jsx";

function Card({
    title,
    description,
    action,
    content,
    footer,
    text,
    className,
    ...props
}) {
    return (
        <SCard
            {...props}
            className={cn("w-[300px] text-center text-lg", className)}
        >
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
                {action && <CardAction>{action}</CardAction>}
            </CardHeader>
            <CardContent>
                {content && (
                    <span>
                        <span className={cn("text-4xl font-bold")}>
                            {content}
                        </span>
                        {text}
                    </span>
                )}
            </CardContent>
            {footer && <CardFooter>{footer}</CardFooter>}
        </SCard>
    );
}

export default Card;
