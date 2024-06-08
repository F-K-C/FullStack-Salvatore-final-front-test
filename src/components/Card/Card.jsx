import './Card.css'

export default function Card(props) {
    return (
        <div className="card">
            <h2>{props.item.nome}</h2>
            {props.item.preco && <p><b>Preço do aparelho</b>: {props.item.preco} </p>}
            <img src={props.item.imagem} width="200" />
        </div>
    )
}