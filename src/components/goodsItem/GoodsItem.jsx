import { Link } from 'react-router-dom'
import './index.scss'
import { useDispatch } from 'react-redux'

function GoodsItem(props) {
    const dispatch = useDispatch()

    const propsTransfer = () => {
        dispatch({
            type: 'OPEN_GOOD_CARD',
            payload: props
        })
    }

    return (
        <div className='goods-item'>
            <Link to={'goods-card/' + props.name} className='goods-item__picture-wrapper'>
                <img className='goods-item__picture' src={props.image_url} alt={props.name} onClick={() => propsTransfer()} />
            </Link>
            <div className='goods-item__describe-block'>
                <Link to={'goods-card/' + props.name.replace(/\//g, '--')} className='goods-item__link goods-item__name '>
                    <p onClick={() => propsTransfer()}>{props.name}</p>
                </Link>
                <div className='goods-item__category'>
                    <p>{props.category}</p>
                </div>
            </div>
            <div className='goods-item-extra'>
                <div className='goods-item__info'>
                    <p>{new Intl.NumberFormat('ru-RU').format(props.views)} </p>
                </div>
                <div className='goods-item__info'>
                    <p>{new Date(props.start_date).toLocaleDateString('ru-RU')}</p>
                </div>
                <div className='goods-item__info'>
                    <p>{new Date(props.end_date).toLocaleDateString('ru-RU')}</p>
                </div>
            </div>
        </div >
    )
}

export default GoodsItem