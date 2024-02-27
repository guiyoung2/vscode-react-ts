import { Route, Routes } from "react-router-dom"
import Home from "./page"
import Project from "./project"
import Content from "./content"



const Layout = (): JSX.Element => {

    return (
        <div>
            <div>
                <Routes>
                    <Route path="/" element={<Home/>}>home</Route>
                    <Route path="/project" element={<Project />}>project</Route>
                    <Route path="/content" element={<Content />}>content</Route>
                </Routes>
            </div>
        </div>
    )
}

export default Layout