import { Link, NavLink } from "react-router-dom"

export const NavBar = () => {
    return (
        <nav className="content-nav">
            <div className="">

                <div className="content-nav-content" >
                    <ul className="navbar-nav content-nav-ul">
                        <Link to='/' className="itemnav" href="#">Home</Link>
                        <li className="">
                            <NavLink to='/About' className="itemnav">About</NavLink>
                        </li>
                        <li className="">
                            <NavLink to='/Projects' className="itemnav" >Projects</NavLink>
                        </li>
                        <li className="">
                            <NavLink to='/Contact' className="itemnav">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
