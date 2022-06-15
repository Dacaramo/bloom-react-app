import myStyles from "../styles/SignupPageMain.module.scss";
import logo from "../images/BloomLogoOnBlue.png";
import happyWomanImg from "../images/HappyWoman.png";
import { useNavigate } from "react-router-dom";

const SignupPageMain = () => {
    const navigate = useNavigate();

    return (
        <div className={myStyles.mainContainer}>
            <form className={myStyles.formContainer}>
                <h1>Deja tus datos y recibe actualizaciones</h1>
                <div>
                    <label htmlFor="fullNameInput">Nombre completo</label>
                    <input type="text" id="fullNameInput" placeholder="José Luis Flores Sánchez" required/>
                </div>
                <div>
                    <label htmlFor="emailInput">Correo Electrónico</label>
                    <input type="email" id="emailInput" placeholder="example@hello.com" required/>
                </div>
                <div>
                    <label htmlFor="phoneNumberInput">Número de celular</label>
                    <input type="tel" id="phoneNumberInput" placeholder="3125654190" required/>
                </div>
                <div>
                    <label htmlFor="infoTypeSelect">¿Qué información quieres recibir?</label><br />
                    <select id="infoTypeSelect" required>
                        <option key="investor" value="INVESTOR">Inversionista</option>
                        <option key="organization" value="ORGANIZATION">Empresa</option>
                    </select>
                </div>
                <label htmlFor="termsAndConditionsCheckbox">
                    <input type="checkbox" id="termsAndConditionsCheckbox" required/>He leído y acepto la política de tratamiento de datos
                </label>
                <button type="submit">Inscribirse</button>
            </form>
            <div className={myStyles.returnContainer}>
                <div>
                    <img className={myStyles.happyWomanImg} src={happyWomanImg} alt=""/>
                    <span>Vigilados por:</span>
                    <img className={myStyles.bloomLogoImg} src={logo} alt="" />
                </div>
                <button onClick={() => navigate("/")}>Regresar</button>
            </div>
        </div>
    );
}

export default SignupPageMain;