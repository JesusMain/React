import {useState} from 'react'

function Condicional(props){
    const[email, setEmail] = useState()
    const[userEmail, setUserEmail] = useState()

    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
    }
    function limparEmail(e){
        e.preventDefault()
        setUserEmail('')
    }
    return(
        <div>
            <h2>Cadastre Seu E-mail:</h2>
            <form>
                <input type="email" placeholder="Digite seu email..."
                onChange={(e)=>setEmail(e.target.value)} />
                <button type="submit" onClick={enviarEmail}>Enviar email</button>
                {userEmail &&(
                    <div>
                        <p>O e-mail do usuario é:{userEmail}</p>
                        <button onClick={limparEmail}>Limpar Email</button>
                    </div>
                )}
            </form>
        </div>
    )
}
export default Condicional