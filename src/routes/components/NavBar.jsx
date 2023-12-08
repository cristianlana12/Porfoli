import { Link, NavLink } from "react-router-dom"

export const NavBar = () => {
    return (
        <nav className="content-nav">
            <div className="">

                <div className="content-nav-content" >
                    <ul className="navbar-nav content-nav-ul">
                        <Link to='/' className="itemnav home">Home</Link>
                        <li>
                            <NavLink to='/About' className="itemnav">About</NavLink>
                        </li>
                        <li>
                            <NavLink to='/Projects' className="itemnav">Projects</NavLink>
                        </li>
                        <li>
                            <NavLink to='/Contact' className="itemnav">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
