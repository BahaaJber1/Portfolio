import {
    MobileNav,
    MobileNavHeader,
    MobileNavMenu,
    MobileNavToggle,
    Navbar,
    NavbarLogo,
    NavBody,
    NavItems,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { NavLink } from "react-router";

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
            <NavBody>
                <NavbarLogo />
                <NavItems items={ROUTES} />
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
