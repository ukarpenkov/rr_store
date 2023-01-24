import './index.scss'

function GoodsItem(props) {



    return <div className="goods-item">
        <div className='goods-item__picture-wrapper'>
            <img className='goods-item__picture' src={props.image_url} alt={props.name} />
        </div>
        <div className='goods-item__describe-block'>
            <div className='goods-item__name'>
                <p>{props.name}</p>
            </div>
            <div className='goods-item__category'>
                <p>{props.category}</p>
            </div>
        </div>
        <div className='goods-item-extra'>
            <div className='goods-item__info'>
                <p>{new Intl.NumberFormat('ru-RU').format(props.views)} </p>
            </div>
            <div className='goods-item__info'>
                <p>{(props.start_date).replace(/\//g, '.')}</p>
            </div>
            <div className='goods-item__info'>
                <p>{(props.end_date).replace(/\//g, '.')}</p>
            </div>
        </div>

    </div>
}

export default GoodsItem