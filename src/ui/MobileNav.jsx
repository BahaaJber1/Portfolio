import {
    MobileNav,
    MobileNavHeader,
    MobileNavMenu,
    MobileNavToggle,
    NavbarButton,
    NavbarLogo,
} from "@components/ui/resizable-navbar";
import { cn } from "@lib/utils.js";
import { useState } from "react";
import { Link } from "react-router";
import { ROUTES } from "../constants/navConstants.js";
import ToggleDarkmodeButton from "./ToggleDarkmodeButton.jsx";

function MobileNavigation(props) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <MobileNav {...props}>
            <MobileNavHeader>
                <NavbarLogo />
                <div className={cn("flex flex-row items-center gap-x-2")}>
                    <NavbarButton variant="secondary">
                        <ToggleDarkmodeButton />
                    </NavbarButton>
                    <MobileNavToggle
                        isOpen={isMobileMenuOpen}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    />
                    <MobileNavMenu isOpen={isMobileMenuOpen}>
                        {ROUTES.map((route) => (
                            <Link
                                key={route.link}
                                to={route.link}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {route.name}
                            </Link>
                        ))}
                    </MobileNavMenu>
                </div>
            </MobileNavHeader>
        </MobileNav>
    );
}

export default MobileNavigation;
