import React, { useState } from 'react';
import { styled } from 'styled-components';
import EscolherPlano from '../pages/subscript/EscolherPlano';
import { useNavigate } from 'react-router-dom';

export default function Modal({isOpen, setModalOpen , children}){
    // const [choised, setChoised] = useState(false);

    function EscolherPlano(props){
    const dadosSerializados = localStorage.getItem("dadosSalvos");
    const dadosDeserializados = JSON.parse(dadosSerializados);

    const [choise, setChoise] =useState([])
    const navigate = useNavigate();

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
            navigate('/home')
            
        })
        promise.catch(err => {
            console.log(err.response.data.message)
        })

    }, [])
    }

    if(isOpen){
    return(
        <ContainerBackgroundModal>
         <ContainerModal>
            {children}
            <ContainerModalButton>
                <button onClick={setModalOpen}> Não </button>
                <button onClick={EscolherPlano}> Sim </button>

                {/* {choised && <EscolherPlano />} */}

            </ContainerModalButton>
         </ContainerModal>
        </ContainerBackgroundModal>
    )
    }
    return null
}

const ContainerBackgroundModal = styled.div `
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgb(0, 0, 0, 0.7);
    z-index: 1000;
`

const ContainerModal = styled.div `
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 150px;
    background-color: #fff;
    border-radius:10px;
    color: black;
    font-size: 30px;

`

const ContainerModalButton = styled.div `
    display: flex;
    font-size: 30px;
    margin-left: 20px;
        button {
            display:flex;
            flex-direction: row;  
            justify-content: space-around;
            margin: 10px
            
        }
`