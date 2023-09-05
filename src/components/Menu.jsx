import { Link } from "react-router-dom"

export default function Menu(){

    return(
        <nav className="Menu">
            <Link to='/'>Home</Link>
            <span> | </span>
            <Link to='/produtos'>Produtos</Link>
        </nav>
    )
}