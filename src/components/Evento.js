function Evento ({numero}) {
function meuEvento (){
    console.log(`Opa, fui ativado! ${numero} `)
}

    return (
        <div>
            <p>Clique Para ativar</p>
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    )

}

export default Evento 