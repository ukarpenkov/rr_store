import './index.css'

function GoodsItem(props) {

    return <div className="goods__item">
        <img src={props.image_url} alt={props.name} />
        <p>{props.name}</p>
        <p>{props.category}</p>
    </div>
}

export default GoodsItem