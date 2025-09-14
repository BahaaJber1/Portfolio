import {
    MobileNav,
    MobileNavHeader,
    MobileNavMenu,
    MobileNavToggle,
    Navbar,
    NavbarLogo,
    NavBody,
    NavItems,
    NavbarButton,
} from "@/components/ui/resizable-navbar";
import { toggleDarkMode } from "../features/darkmode/darkModeSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router";
import { CiDark, CiSun } from "react-icons/ci";

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
        console.log("Dark mode toggled:", !darkMode);
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
                    {darkMode ? <CiDark size={20} /> : <CiSun size={20} />}
                </NavbarButton>
            </NavBody>

            <MobileNav>
                <MobileNavHeader>
                    <NavbarLogo />
                    <MobileNavToggle
                        isOpen={isMobileMenuOpen}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
                </MobileNavHeader>
            </MobileNav>
        </Navbar>
    );
}

export default Header;
