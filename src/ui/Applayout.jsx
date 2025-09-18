import { Outlet } from "react-router";
import Header from "./Header.jsx";

function Applayout() {
    return (
        <>
            <Header />
            <main className="h-[5000px]">
                <Outlet />
            </main>
        </>
    );
}

export default Applayout;
