import './index.scss'
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import RatingStars from '../../components/rating/RatingStars';
import OldPrice from '../../components/oldPrice/OldPrice';


function GoodCard() {
    const good = useSelector(state => state.currentGood)

    console.log(good.new_price);
    console.log(good.old_price);
    return <div className="good-card-wrapper">

        <div className="back-button">
            <Link to='/' className="back-button_link" >◁ Назад</Link>
        </div>
        <div className="good-card">
            <div className="good-card-header">
                <div className="good-card-header__sale">
                    <p>-{good.discount}%</p>
                    <div className='rec'></div>
                </div>
                <div className="good-card-header__logo-wrapper">
                    <img className="good-card-header__logo" src={good.logo_url} alt="" />
                </div>
            </div>
            <div className="good-card-main">
                <div className="good-card-main__picture-wrapper">
                    <img className="good-card-main__picture" src={good.image_url} alt="" />
                </div>
                <div className="good-card-main__name">
                    <p>{good.name}</p>
                </div>
                <div className="good-card-main__rating">
                    <RatingStars props={good.stars} />
                </div>
                <div className="good-card-main__old-price">
                    <OldPrice props={good.old_price} />
                </div>
                <div className="good-card-main__new-price">
                    <div>{good.new_price ? good.new_price : <p>Уточните цену по телефону!</p>}</div>
                    <div>цена по акции</div>
                </div>
            </div>
            <div className="good-card-bottom">
                {good.disclaimer}
            </div>
        </div>
    </div>
}


export default GoodCard