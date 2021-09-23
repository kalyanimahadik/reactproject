
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (<nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
        <Link to='/' className="navbar-brand" style={{ paddingLeft: "10px" }}>CRUD</Link>


        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link to='/' className="nav-link">Submit Data </Link>
                </li>
                <li className="nav-item">
                    <Link to='/select' className="nav-link">select data</Link>
                </li>


            </ul>

        </div>
    </nav>);
}

export default Navbar;