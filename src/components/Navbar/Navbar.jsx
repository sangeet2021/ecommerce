import { Link } from "react-router-dom";
import './navbar.css';
const Navbar = () => {
    return ( 
        <div className="navbar">
            <Link className="head">
                <h1>
                    Ecommerce
                </h1>
            </Link>

            <div className="sb">
                <input type="text" name="" id="" placeholder="search products"/>
                <button>Search</button>
            </div>

            <div className="li">
                <ul>
                    <li>
                        <Link className="chi">Products</Link>
                    </li>
                    <li>
                        <Link className="chi">About Us</Link>
                    </li>
                    <li>
                        <Link className="chi">Contact Us</Link>
                    </li>
                    
                </ul>
            </div>
        </div>
     );
}
 
export default Navbar;