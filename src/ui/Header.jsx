import { Navbar } from "@components/ui/resizable-navbar";
import DesktopNav from "./DesktopNav.jsx";
import MobileNav from "./MobileNav";

function Header() {
    return (
        <Navbar>
            <DesktopNav />
            <MobileNav />
        </Navbar>
    );
}

export default Header;
