import { Outlet } from "react-router";
import Header from "./Header.jsx";
import Container from "./Container.jsx";

function Applayout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default Applayout;
