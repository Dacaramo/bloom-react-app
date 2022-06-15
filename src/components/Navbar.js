import myStyles from "../styles/Navbar.module.scss";
import logo from "../images/BloomLogo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div className={myStyles.horizontalContainer}>
            <img src={logo} alt=""/>
            <button onClick={() => navigate("/signup")}>Inscríbete</button>
        </div>
    );
}

export default Navbar;