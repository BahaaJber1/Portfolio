import { lazy, Suspense, useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router";
const Applayout = lazy(() => import("@ui/Applayout"));
const About = lazy(() => import("@pages/About"));
const Home = lazy(() => import("@pages/Home"));
const Projects = lazy(() => import("@pages/Projects"));
const Blog = lazy(() => import("@pages/Blog"));
const Photos = lazy(() => import("@pages/Photos"));
const Test = lazy(() => import("@pages/Test"));

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
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route element={<Applayout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="projects" element={<Projects />} />
                        <Route path="about" element={<About />} />
                        <Route path="blog" element={<Blog />} />
                        <Route path="photos" element={<Photos />} />
                        <Route path="test-component" element={<Test />} />
                        <Route path="*" element={<div>404 Not Found</div>} />
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;
