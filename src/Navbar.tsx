import { Link, useMatch, useResolvedPath } from "react-router-dom"

interface Props {
    to: any,
    children: any
}

export default function Navbar(){
    return (
         <nav className="nav">
        <Link to="/" className="title">
            PersonalCv
        </Link>
        <ul>
            <Link to="/form">Form</Link>
            <Link to="/list">List</Link>
        </ul>
    </nav>
    )
}
