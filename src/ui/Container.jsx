import { motion } from "motion/react";
import { cn } from "@lib/utils";

function Container({ children, className, ...restProps }) {
    return (
        <motion.div
            className={cn(
                "mx-auto flex w-full max-w-7xl flex-col gap-5 px-3",
                className,
            )}
            {...restProps}
        >
            {children}
        </motion.div>
    );
}

export default Container;
