import {
    NavBody,
    NavItems,
    NavbarButton,
    NavbarLogo,
} from "@components/ui/resizable-navbar.jsx";
import { ROUTES } from "../constants/navConstants.js";
import ToggleDarkmodeButton from "./ToggleDarkmodeButton.jsx";

function DesktopNav(props) {
    return (
        <NavBody {...props}>
            <NavbarLogo />
            <NavItems items={ROUTES} />

            <NavbarButton variant="secondary">
                <ToggleDarkmodeButton />
            </NavbarButton>
        </NavBody>
    );
}

export default DesktopNav;
