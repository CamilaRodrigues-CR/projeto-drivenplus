import axios from "axios";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../assets/constants/contexts/AuthContext";


export default function Subscripions(){
    const URL = 'https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships';
    const {token} = useContext(AuthContext)
    const config = {
        headers: {Authorization: `Bearer ${token}`}
    }

    console.log(config)
    const [planos, setPlanos] = useState([]);

    useEffect ( () => {
        
        const promise = axios.get(URL, config);
        promise.then (res => {
            console.log(res.data)
            setPlanos(res.data);
        })
        promise.catch (err => {
            console.log (err.response.message)
        })
        
    } , [])
    

    return (
        <>
            <h1>Escolha seu plano</h1>
            <ul>
                {planos.map( plano => (
                <li>
                    <img src={plano.image} alt="Logo D+" />
                    <p>R${plano.price}</p>
                </li>
                )
                )}
                
{/*                 
                <div>
                    <img src="{}" alt="D+" />
                    <p>R$39,90</p>
                </div>
                 <div>
                    <img src="" alt="D+" />
                    <p>R$39,90</p>
                </div>
                 <div>
                    <img src="" alt="D+" />
    //                 <p>R$39,90</p>
    //             </div> */}
            </ul>
       </>
    )
}