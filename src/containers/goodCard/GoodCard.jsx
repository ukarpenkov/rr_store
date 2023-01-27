import './index.scss'
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import RatingStars from '../../components/rating/RatingStars';
import Price from '../../components/price/Price';
import { useEffect, useReducer, useState } from 'react';
import goodCardReducer from '../../reducers/goodCardReducer';


function GoodCard() {
    let good = useSelector(state => state.currentGood)
    const [product] = useReducer(goodCardReducer, !Object.keys(good).length ? JSON.parse(localStorage.getItem('good')) : good)

    useEffect(() => {
        !Object.keys(good).length ? console.log('server data') : localStorage.setItem('good', JSON.stringify(good))
    })

    return <div className="good-card-wrapper">

        <div className="back-button">
            <Link to='/' className="back-button_link" >◁ Назад</Link>
        </div>
        <div className="good-card">
            <div className="good-card-header">
                {Number(product.discount) === 0 ? <div>&nbsp;</div> :
                    <div className="good-card-header__sale">
                        <p>-{product.discount}%</p>
                        <div className='rec'></div>
                    </div>}
                <div className="good-card-header__logo-wrapper">
                    <img className="good-card-header__logo" src={product.logo_url} alt="" />
                </div>
            </div>
            <div className="good-card-main">
                <div className="good-card-main__picture-wrapper">
                    <img className="good-card-main__picture" src={product.image_url} alt="" />
                </div>
                <div className="good-card-main__name">
                    <p>{product.name}</p>
                </div>
                <div className="good-card-main__rating">
                    <RatingStars props={product.stars} />
                </div>
                <div className="good-card-main__old-price">
                    <Price price={product.old_price} priceType='old' />
                </div>
                <div className="good-card-main__new-price">
                    <Price price={product.new_price} priceType='new' />
                </div>
            </div>
            <div className="good-card-bottom">
                {product.disclaimer}
            </div>
        </div>
    </div>
}


export default GoodCard