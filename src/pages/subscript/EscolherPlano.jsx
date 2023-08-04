import { useEffect, useState } from "react";
import axios from "axios";


export default function EscolherPlano(props){
    const dadosSerializados = localStorage.getItem("dadosSalvos");
    const dadosDeserializados = JSON.parse(dadosSerializados);

    const [choise, setChoise] =useState([])

    useEffect (() => {
        const URL = "https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions";
        const config = {
            headers: { Authorization: `Bearer ${dadosDeserializados.token}` }
        }
        const body = {
            membershipId: (props.id),
            cardName: (props.nome),
            cardNumber: (props.numero),
            securityNumber: (props.codigo),
            expirationDate: (props.validade)
        }

        const promise = axios.post(URL, body, config);
        promise.then(res => {
            console.log(res.data)
            setChoise(res.data);
        })
        promise.catch(err => {
            console.log(err.response.data.message)
        })

    }, [])

    return(
        <></>
    )
}