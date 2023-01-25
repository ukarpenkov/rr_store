import { useSelector } from "react-redux"
import { Link } from "react-router-dom"


function GoodCard() {
    const good = useSelector(state => state.currentGood)

    console.log(good.new_price);
    console.log(good.old_price);
    return <div className="good-card-wrapper">
        <div className="back-button">
            <Link to='/' >◁ назад</Link>
        </div>
        <div className="good-card">
            <div className="good-card-header">
                <div className="good-card-header__sale">
                    {good.discount}
                </div>
                <div className="good-card-header__logo">
                    <img src={good.logo_url} alt="" />
                </div>
            </div>
            <div className="good-card-main">
                <div className="good-card-main-info">
                    <div className="good-card-main__image">
                        <img src={good.image_url} alt="" />
                    </div>
                    <div className="good-card-main__name">
                        <p>{good.name}</p>
                    </div>
                </div>
                <div className="good-card-main-prices-and-rate">
                    <div className="good-card-main-prices-and-rate__rating">
                        ★★★★★ {good.stars}
                    </div>
                    <div className="good-card-main-prices-and-rate__old-price">
                        <div>{good.old_price}</div>
                        <div>старая цена</div>
                    </div>
                    <div className="good-card-main-prices-and-rate__price">
                        <div>{good.new_price ? good.new_price : <p>Уточните цену по телефону!</p>}</div>
                        <div>цена по акции</div>
                    </div>
                </div>
            </div>
            <div className="good-card-bottom">
                {good.disclaimer}
            </div>


        </div>
        {good.name}
    </div>
}


export default GoodCard