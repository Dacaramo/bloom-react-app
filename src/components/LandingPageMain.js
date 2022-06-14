import myStyles from "../styles/LandingPageMain.module.scss";
import warrantyImg from "../images/Warranty.png";
import campaignImg from "../images/Campaign.png";
import investImg from "../images/Invest.png";
import profitImg from "../images/Profit.png";
import womanImg from "../images/CircleWoman.png";
import surprisedMan from "../images/SurprisedMan.png";

const LandingPageMain = () => {
    return (
        <div className={myStyles.mainContainer}>
            <div className={myStyles.firstChildContainer}>
                <div className={myStyles.warrantyCard}>
                    <img src={warrantyImg} alt="" />
                    <h1>Proyectos con garantía</h1>
                    <p>Todos los proyectos en nuestra plataforma cuentan con garantía, entendiendo que siempre existe un riesgo al momento de invertir.</p>
                </div>
                <div className={myStyles.learnMoreContainer}>
                    <h1>Este es el primer espacio donde todos avanzamos juntos</h1>
                    <p>Somos el primer Crowdfunding de Financiación en Perú, donde empresas y emprendedores podrán solicitar recursos para un proyecto y donde todos podemos invertir recibiendo una ganancia por nuestros recursos.</p>
                    <button>Conoce más</button>
                </div>
            </div>
            <div className={myStyles.secondChildContainer}>
                <div className={myStyles.imageAndTextContainer}>
                    <img src={campaignImg} alt="" /><br />
                    <span>Crea una campaña de financiación</span>
                </div>
                <div className={myStyles.imageAndTextContainer}>
                    <img src={investImg} alt="" /><br />
                    <span>Invierte en el proyecto que quieras</span>
                </div>
                <div className={myStyles.imageAndTextContainer}>
                    <img src={profitImg} alt="" /><br />
                    <span>Recibe una ganancia por tu inversión</span>
                </div>
                <img className={myStyles.surprisedManImg} src={surprisedMan} alt=""/>
            </div>
            <div className={myStyles.thirdChildContainer}>
                <img src={womanImg} alt="" />
                <div className={myStyles.headerAndParagraphContainer}>
                    <h1>¿Esto es legal en Perú?</h1>
                    <p>Somos una Sociedad Administradora de Plataformas de Financiamiento Participativo Financiero, estas son vigiladas por la SMV (Superintendencia del Mercado de Valores), actualmente nos encontramos en proceso de Solicitud de Permiso de Funcionamiento ante el regulador.</p>
                </div>
                <div className={myStyles.headerAndParagraphContainer}>
                    <h1>¿Cuando puedo invertir?</h1>
                    <p>Por el momento no estamos en funcionamiento, esperamos poder hacer un lanzamiento cuando la SMV nos autorice. Estaremos actualizando a todos sobre las fechas de lanzamiento, puedes estar atento a nuestras redes o inscribirte a nuestros boletines.</p>
                </div>
            </div>
            <div className={myStyles.fourthChildContainer}>
                <button>Conoce más</button>
            </div>
        </div>
    );
}

export default LandingPageMain;