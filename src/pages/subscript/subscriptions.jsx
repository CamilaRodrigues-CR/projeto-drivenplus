import axios from "axios";
import { useContext, useEffect } from "react";
import LoginPage from "../loginPage/LoginPage";
import AuthContext from "../../assets/constants/contexts/AuthContext";
//import { config } from "../../assets/constants/config";

export default function Subscripions(){
    const URL = 'https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships';
    const contexto = useContext(AuthContext);

    useEffect ( () => {
        const config = {
            headers: {Authorization: `Bearer ${contexto.token}`}
        }

        const promise = axios.get(URL, config);
        promise.then (res => {
            console.log (res.data)
        })
        promise.catch (err => {
            console.log (err.response.message)
        })

    } , [])

    return (
        <>
            <h1>Escolha seu plano</h1>
            <div>
                <div>
                    <img src="" alt="D+" />
                    <p>R$39,90</p>
                </div>
                 <div>
                    <img src="" alt="D+" />
                    <p>R$39,90</p>
                </div>
                 <div>
                    <img src="" alt="D+" />
                    <p>R$39,90</p>
                </div>
            </div>
        </>
    )
}