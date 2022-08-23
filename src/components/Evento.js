import Button from "./Evento/Button"

function Evento () {
function meuEvento (){
    console.log(`|Ativando primeiro evento `)
}
function segundoEvento (){
    console.log(`|Ativando segundo evento `)
}

    return (
        <div>
            <p>Clique Para ativar</p>
            <Button event={meuEvento} text="Primeiro evento"/>
            <Button event={segundoEvento} text="Segundo evento"/>
        </div>
    )

}

export default Evento 