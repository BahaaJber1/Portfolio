import {
    MobileNav,
    MobileNavHeader,
    MobileNavMenu,
    MobileNavToggle,
    Navbar,
    NavbarButton,
    NavbarLogo,
    NavBody,
    NavItems,
} from "@components/ui/resizable-navbar";
import { toggleDarkMode } from "@features/darkmode/darkModeSlice";
import { useState } from "react";
import { CiDark, CiSun } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router";
import Container from "./Container";
import { cn } from "@lib/utils";
import { AnimatePresence, motion } from "motion/react";

const ROUTES = [
    { link: "/about", name: "About" },
    { link: "/projects", name: "Projects" },
    { link: "/blog", name: "Blog" },
    { link: "/photos", name: "Photos" },
];

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const darkMode = useSelector((state) => state.darkMode.darkMode);
    const dispatch = useDispatch();

    function handleToggleDarkMode() {
        dispatch(toggleDarkMode());
    }

    return (
        <Navbar>
            <NavBody>
                <NavbarLogo />
                <NavItems items={ROUTES} />
                <NavbarButton
                    variant="secondary"
                    onClick={handleToggleDarkMode}
                >
                    {/* Fix the animation later and colors later */}
                    <AnimatePresence mode="wait">
                        {darkMode ? (
                            <motion.span
                                key="sun"
                                initial={{ opacity: 0, rotate: 90 }}
                                animate={{ opacity: 1, rotate: 0 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <CiSun
                                    className={cn("text-bahaa-purple h-6 w-6")}
                                />
                            </motion.span>
                        ) : (
                            <motion.span
                                key="dark"
                                initial={{ opacity: 0, rotate: -90 }}
                                animate={{ opacity: 1, rotate: 0 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <CiDark className={cn("h-6 w-6")} />
                            </motion.span>
                        )}
                    </AnimatePresence>
                </NavbarButton>
            </NavBody>

            <MobileNav>
                <MobileNavHeader>
                    <NavbarLogo />
                    <Container className={cn("flex-row items-center gap-x-2")}>
                        <NavbarButton
                            variant="secondary"
                            onClick={handleToggleDarkMode}
                        >
                            <AnimatePresence mode="wait">
                                {darkMode ? (
                                    <motion.span
                                        key="sun-mobile"
                                        initial={{ opacity: 0, rotate: 90 }}
                                        animate={{ opacity: 1, rotate: 0 }}
                                        exit={{ opacity: 0, rotate: -90 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                        }}
                                    >
                                        <CiSun
                                            className={cn(
                                                "text-bahaa-purple h-6 w-6",
                                            )}
                                        />
                                    </motion.span>
                                ) : (
                                    <motion.span
                                        key="dark-mobile"
                                        initial={{ opacity: 0, rotate: -90 }}
                                        animate={{ opacity: 1, rotate: 0 }}
                                        exit={{ opacity: 0, rotate: 90 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                        }}
                                    >
                                        <CiDark className={cn("h-6 w-6")} />
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </NavbarButton>
                        <MobileNavToggle
                            isOpen={isMobileMenuOpen}
                            onClick={() =>
                                setIsMobileMenuOpen(!isMobileMenuOpen)
                            }
                        />
                        <MobileNavMenu isOpen={isMobileMenuOpen}>
                            {ROUTES.map((route) => (
                                <NavLink
                                    key={route.link}
                                    to={route.link}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {route.name}
                                </NavLink>
                            ))}
                        </MobileNavMenu>
                    </Container>
                </MobileNavHeader>
            </MobileNav>
        </Navbar>
    );
}

export default Header;
