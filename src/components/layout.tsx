import { Route, Routes } from "react-router-dom"
import Home from "../pages/home"
import Project from "../pages/project"
import TemplateLayout from "styled-component/layout-style"
import SideTapMenu from "./SideTapMenu"
import About from "../pages/about"
import Practice from "pages/practice"
import Contact from "pages/contact"
import SideBts from "./SideBts"



const Layout = (): JSX.Element => {

    return (
        <div>
            <TemplateLayout>
                <SideBts/>
                <SideTapMenu/>
                <Routes>
                    <Route path="/" element={<Home/>}>home</Route>
                    <Route path="/about" element={<About />}>about</Route>
                    <Route path="/project" element={<Project />}>project</Route>
                    <Route path="/practice" element={<Practice />}>practice</Route>
                    <Route path="/contact" element={<Contact />}>contact</Route>
                </Routes>
            </TemplateLayout>
        </div>
    )
}

export default Layout