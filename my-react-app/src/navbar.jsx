import {Link} from "react-router-dom"
import "./navbar.css";
function Navbar(){
    return <div>
        <nav class="Navbar">
            <ul class="linkholder">
                <li class="links">
                    <Link to="/"><button class="button">Home</button></Link>
                </li>
                <li class="links">
                    <Link to="/Last"><button class="button">Last</button></Link>
                </li>
            </ul>
        </nav>
    </div>
}

export default Navbar;