import myStyles from "../styles/RegisteredPeopleList.module.scss";
import { useEffect, useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisteredPeopleList = () => {
    const navigate = useNavigate();
    const [peopleList, setPeopleList] = useState([]);
    const [isFetchingInProcess, setIsFetchingInProcess] = useState(true);

    useEffect(() => {
        fetchPeopleList();
    }, [])

    const fetchPeopleList = async () => {
        const response = await Axios.get(`https://72fc7xa4pk.execute-api.us-east-2.amazonaws.com/prueba/api/v2/portal/dev-test`);
        setPeopleList(response.data.data);
        setIsFetchingInProcess(false);
    }

    return (
        <div className={myStyles.list}>
            {
                isFetchingInProcess ?
                <span>Cargando...</span> :
                peopleList.map((person) => {
                    return (<div className={myStyles.cell}>
                                <span><b>Nombre: </b>{person.name}</span>
                                <span><b>Correo: </b>{person.email}</span>
                                <span><b>Teléfono: </b>{person.cellphone}</span>
                                <span><b>Aceptó politicas: </b>{person.acceptsPolitics.toString()}</span>
                                <span><b>Interesado en invertir: </b>{person.interestedInInvesting.toString()}</span>
                                <span><b>Interesado en recibir préstamo: </b>{person.interestedInBorrowing.toString()}</span>
                            </div>)
                })
            }
            <button onClick={() => navigate("/signup")}>Regresar</button>
        </div>
    );
}

export default RegisteredPeopleList;