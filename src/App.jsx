import { BrowserRouter, Route, Routes } from "react-router";
import Applayout from "./ui/Applayout";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function App() {
    const darkMode = useSelector((state) => state.darkMode.darkMode);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Applayout />}>
                    <Route path="/" element={<p>Welcome here</p>} />
                    <Route path="projects" element={<p>Projects here</p>} />
                    <Route path="about" element={<p>About here</p>} />
                    <Route path="blog" element={<p>Blogs here</p>} />
                    <Route path="photos" element={<p>Photos here</p>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
