import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate =useNavigate();

    function fazerCadastro(event) {
        event.preventDefault();
        const URL = "https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up"
        const dados = {
            email: email,
            name: nome,
            cpf: cpf,
            password: senha
        }
        const promise = axios.post(URL, dados);
            promise.then ( (res) => {
                console.log(res.data)
                navigate("/");
            })
            promise.catch ( (err) => {
                console.log(err.response.data)
            })
    }


    return (
        <>
            <form onSubmit={fazerCadastro}>
                <input type="text" placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)}/>
                <input type="text" placeholder="CPF" value={cpf} onChange={e => setCpf(e.target.value)}/>
                <input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)}/>
                <input type="password" placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)}/>
                <button type="submit">CADASTRAR</button>
                
            </form>
            <Link to="/">Já possuí uma conta? Entre</Link>
        </>

    )
}
