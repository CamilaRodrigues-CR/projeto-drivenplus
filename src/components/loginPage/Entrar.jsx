

export default function Entrar() {
    const URL = 'https://mock-api.driven.com.br/api/v4/driven-plus/auth/login'
    const promise = axios.post(URL);
    promise.then((res) => {
        console.log(res.data);
    })
    promise.cath( (err) => {
        console.log(err.data.message);
    })

}