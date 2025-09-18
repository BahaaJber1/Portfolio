import { Outlet } from "react-router";
import Header from "./Header.jsx";
import Container from "./Container.jsx";

function Applayout() {
    return (
        <Container>
            <Header />
            <main className="h-[5000px]">
                <Outlet />
            </main>
        </Container>
    );
}

export default Applayout;
