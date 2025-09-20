import LogoLoop from "@components/LogoLoop.jsx";
import { socialLinks } from "../constants/logosConstants.jsx";

function LogoSection() {
    return (
        <>
            <LogoLoop
                logos={socialLinks}
                speed={50}
                logoHeight={60}
                direction="left"
                gap={80}
                pauseOnHover
                scaleOnHover
                fadeOut
                ariaLabel="Social Connections"
            />
        </>
    );
}

export default LogoSection;
