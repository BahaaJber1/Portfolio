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
import { useState } from "react";
import { NavLink } from "react-router";
import Container from "./Container.jsx";
import ToggleDarkmodeButton from "./ToggleDarkmodeButton.jsx";
import { cn } from "@lib/utils.js";

const ROUTES = [
    { link: "/about", name: "About" },
    { link: "/projects", name: "Projects" },
    { link: "/blog", name: "Blog" },
    { link: "/photos", name: "Photos" },
];

function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <Navbar>
            {/* Desktop Navigation */}
            <NavBody>
                <NavbarLogo />
                <NavItems items={ROUTES} />
                <NavbarButton variant="secondary">
                    <ToggleDarkmodeButton />
                </NavbarButton>
            </NavBody>

            {/* Mobile Navigation */}
            <MobileNav>
                <MobileNavHeader>
                    <NavbarLogo />
                    <Container className={cn("flex-row items-center gap-x-2")}>
                        <NavbarButton variant="secondary">
                            <ToggleDarkmodeButton />
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
