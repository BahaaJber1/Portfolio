import { motion } from "motion/react";
import { cn } from "@lib/utils";

function Container({ children, className, ...restProps }) {
    return (
        <motion.div
            className={cn("flex flex-col gap-5", className)}
            {...restProps}
        >
            {children}
        </motion.div>
    );
}

export default Container;
