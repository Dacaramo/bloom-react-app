import myStyles from "../styles/SignupPageMain.module.scss";
import logo from "../images/BloomLogoOnBlue.png";
import happyWomanImg from "../images/HappyWoman.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";

const SignupPageMain = () => {
    const navigate = useNavigate();

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [infoType, setInfoType] = useState("INVESTOR");
    const [policiesAccepted, setPoliciesAccepted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const body = {
        name: fullName,
        email: email,
        cellphone: phoneNumber,
        acceptsPolicies: policiesAccepted,
        interestedInInvesting: (infoType === "INVESTOR"),
        interestedInBorrowing: (infoType === "ORGANIZATION")
    }

    console.log(body);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setFormSubmitted(true);
        setIsLoading(true);
        await Axios.post(`https://72fc7xa4pk.execute-api.us-east-2.amazonaws.com/prueba/api/v2/portal/dev-test`, body);
        setIsLoading(false);
    }

    return (
        <div className={myStyles.mainContainer}>
            {
                (!formSubmitted) ?
                <form className={myStyles.formContainer} onSubmit={handleSubmit}>
                    <h1>Deja tus datos y recibe actualizaciones</h1>
                    <label htmlFor="fullNameInput">Nombre completo</label>
                    <input type="text" id="fullNameInput" placeholder="José Luis Flores Sánchez" required onChange={(e) => setFullName(e.target.value)}/>
                    <label htmlFor="emailInput">Correo Electrónico</label>
                    <input type="email" id="emailInput" placeholder="example@hello.com" required onChange={(e) => setEmail(e.target.value)}/>
                    <label htmlFor="phoneNumberInput">Número de celular</label>
                    <input type="tel" id="phoneNumberInput" placeholder="3125654190" required onChange={(e) => setPhoneNumber(e.target.value)}/>
                    <label htmlFor="infoTypeSelect">¿Qué información quieres recibir?</label>
                    <select id="infoTypeSelect" required onChange={(e) => setInfoType(e.target.value)}>
                        <option key="investor" value="INVESTOR">Inversionista</option>
                        <option key="organization" value="ORGANIZATION">Empresa</option>
                    </select>
                    <label htmlFor="termsAndConditionsCheckbox">
                        <input type="checkbox" id="termsAndConditionsCheckbox" onChange={(e) => setPoliciesAccepted(e.target.checked)}/>
                        He leído y acepto la política de tratamiento de datos
                    </label>
                    <button type="submit" disabled={isLoading}>Inscribirse</button>
                </form> :
                <div className={myStyles.formContainer}>
                    <h1>¡Muchas gracias por ser un visionario {fullName}!</h1>
                    <button onClick={() => navigate("/")}>Regresar</button>
                    <button onClick={() => navigate("/people")}>Ver registrados</button>
                </div>
            }
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