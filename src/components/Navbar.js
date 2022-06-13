import myStyles from "../styles/Navbar.module.scss";
import logo from "../images/BloomLogo.png";

const Navbar = () => {
    return (
        <div className={myStyles.horizontalContainer}>
            <img src={logo} alt=""/>
            <button>Inscríbete</button>
        </div>
    );
}

export default Navbar;