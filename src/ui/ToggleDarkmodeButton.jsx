import { toggleDarkMode } from "@store/slices/darkModeSlice";
import { cn } from "@lib/utils";
import { motion } from "motion/react";
import { CiDark, CiSun } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import Container from "./Container.jsx";

export default function ToggleDarkmodeButton() {
    const darkMode = useSelector((state) => state.darkMode.darkMode);
    const dispatch = useDispatch();

    return (
        <Container
            className={cn(
                "bg-bahaa-purple/20 text-bahaa-purple w-12 flex-row items-center rounded-full px-1 py-1",
                darkMode ? "justify-start" : "justify-end",
            )}
            onClick={() => dispatch(toggleDarkMode())}
        >
            <motion.div
                layout
                transition={{
                    type: "spring",
                    visualDuration: 0.2,
                    bounce: 0.7,
                }}
            >
                {darkMode ? (
                    <CiSun className={cn("h-6 w-6")} />
                ) : (
                    <CiDark className={cn("h-6 w-6")} />
                )}
            </motion.div>
        </Container>
    );
}
