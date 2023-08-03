//import SignUp from "../sign-up/SignUp";
import { Link, useNavigate } from "react-router-dom"
//import Entrar from "../../components/loginPage/Entrar"
import axios from "axios";
import { useState } from "react";


export default function LoginPage() {
    const [email, setEmail] = useState('') 
    const [senha, setSenha] = useState('')

    function fazerLogin(event){
        event.preventDefault();

        const URL = 'https://mock-api.driven.com.br/api/v4/driven-plus/auth/login'
        const dados ={ email: email , password: senha}
        
        const promise = axios.post(URL , dados);
            promise.then((res) => {
                useNavigate("/subscriptions")
                console.log(res.data);
            })
            promise.catch( (err) => {
                alert(err.response.data.message);
                
            })
    }
    return (
        <>
            <img src="" alt="Logo Driven+" />
            <form onSubmit={fazerLogin}>
                <input type="email" placeholder="E-mail" value={email} onChange ={e => setEmail(e.target.value)}/>
                <input type="password" placeholder="Senha" value={senha} onChange ={e => setSenha(e.target.value)}/>
                <button type="submit">ENTRAR</button>

            </form>
            <Link to="/sign-up">Não possuí uma conta? Cadastre-se</Link>
        </>

    )
}