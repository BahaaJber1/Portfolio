import { motion } from "motion/react";


function Test() {
    return (
        <div>
            
        </div>
    );
}

function AnimatedBeamSVG() {
    return (
        <motion.svg width="100" height="100">
            <motion.circle
                initial={{ fill: "#0000ff" }}
                animate={{ fill: "#ff0000" }}
                transition={{
                    duration: 2,
                }}
                cx={50}
                cy={50}
                r={40}
            />
        </motion.svg>
    );
}

export default Test;
