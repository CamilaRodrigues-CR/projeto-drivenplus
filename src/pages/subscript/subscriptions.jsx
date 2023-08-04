import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function Subscripions(){
    const dadosSerializados = localStorage.getItem("dadosSalvos"); 
    const dadosDeserializados = JSON.parse(dadosSerializados)
    
    const [planos, setPlanos] = useState([]);

    useEffect ( () => {
        const URL = 'https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships';
        
        const config = {
            headers: {Authorization: `Bearer ${dadosDeserializados.token}`}
        }
        
        const promise = axios.get(URL, config);
        promise.then (res => {
            console.log(res.data)
            setPlanos(res.data);
        })
        promise.catch (err => {
            console.log (err.response.data.message)
        })
        
    } , [])
    

    return (
        <>
            <h1>Escolha seu plano</h1>
            <ul>
                {planos.map( plano => (
               <Link key={plano.id} to={`/subscriptions/${plano.id}`}>
                    <img src={plano.image} alt="Logo D+" />
                    <p>R${plano.price}</p>
                </Link>
                )
                )}

            </ul>
       </>
    )
}