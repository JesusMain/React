import Item from './Item'

function List(){

    return(
        <>
        <h1>Minha Lista</h1>
        <ul>
            <Item marca="Ferrari" ano_lancamento={1988}/>
            <Item marca="Fiat" ano_lancamento={1998}/>
            <Item marca="Renault" ano_lancamento={1978}/>
        </ul>
        </>
    )
}
export default List