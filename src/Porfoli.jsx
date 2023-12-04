import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "./routes/components/NavBar"
import { HomeScreen } from "./routes/HomeScreen"
import { AboutScrees } from "./routes/AboutScrees"
import { ProjectsScreen } from "./routes/ProjectsScreen"
import { ContactScreen } from "./routes/ContactScreen"
import './styles/navBar.css'

export const Porfoli = () => {
  return (
        <>
            <header className="navBar">
                <NavBar></NavBar>
            </header>
            <main>
                <Routes>
                    <Route path='/' element={<HomeScreen></HomeScreen>}></Route>
                    <Route path='/About' element={<AboutScrees></AboutScrees>}></Route>
                    <Route path='/Projects' element={<ProjectsScreen></ProjectsScreen>}></Route>
                    <Route path='/Contact' element={<ContactScreen></ContactScreen>}></Route>
                    <Route path="/*" element={<Navigate to='/'></Navigate>}></Route>
                </Routes>
            </main>
            <footer>
                <p>Created by Cristian Cordoba!</p>
            </footer>
        </>
    )
}
