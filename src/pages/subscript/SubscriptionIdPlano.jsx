import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Modal from "../../components/Modal";

export default function SubscriptionId() {
    const dadosSerializados = localStorage.getItem("dadosSalvos");
    const dadosDeserializados = JSON.parse(dadosSerializados);

    const [nome, setNome] = useState('');
    const [numero, setNumero] = useState('');
    const [codigo, setCodigo] = useState('');
    const [validade, setValidade] = useState('');
    const [openModal, setOpenModal] = useState(false);

    const { idPlano } = useParams()

    const [plano, setPlano] = useState([])
    


    useEffect(() => {
        const URL = `https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${idPlano}`;

        const config = {
            headers: { Authorization: `Bearer ${dadosDeserializados.token}` }
        }

        const promise = axios.get(URL, config);
        promise.then(res => {
            console.log(res.data)
            setPlano(res.data);
        })
        promise.catch(err => {
            console.log(err.response.data.message)
        })

    }, [])

    function modal(event){
        event.preventDefault();
        setOpenModal(true)
    }

    return (
        <>
            <div>
                <img src={plano.image} alt="Logo" />
                <h1>{plano.name}</h1>
                <h2>Beneficios:</h2>
                <ul>
                    {plano.perks?.map(p => (
                        <div div key={p.id}>
                        <p> {p.title} </p>
                        </div>
                    ))}
                </ul>
                <h2>Preço:</h2>
                <p>R${plano.price} cobrados mensalmente</p>
            </div>
            
            <form onSubmit={modal}>
                <input type="text" placeholder="Nome impresso no cartão" value={nome} onChange={e => setNome(e.target.value)} required/>
                <input type="text" placeholder="Dígitos do cartão" value={numero} onChange={e => setNumero(e.target.value)} required/>
                <input type="text" placeholder="Código de segurança" value={codigo} onChange={e => setCodigo(e.target.value)} required/>
                <input type="text" placeholder="Validade" value={validade} onChange={e => setValidade(e.target.value)} required/>
                <button type="submit" onClick={() => setOpenModal(true)}>ASSINAR</button>
            </form>
            <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}
            nome={nome} numero={numero} codigo={codigo} validade={validade} id={plano.id}>
                <p>Tem certeza que deseja assinar o plano {plano.name} ( R${plano.price} )? </p>
            </Modal>
        </>
    )
}
