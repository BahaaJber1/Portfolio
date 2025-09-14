import { BrowserRouter, Route, Routes } from "react-router";
import Applayout from "./ui/Applayout";

function App() {
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
