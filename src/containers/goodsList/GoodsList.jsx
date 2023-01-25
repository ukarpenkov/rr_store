import { useDispatch, useSelector } from "react-redux"
import GoodsItem from "../../components/goodsItem/GoodsItem";
import './index.scss'
import SortPanel from "../../components/goodsItem/controlPanels/sortPanel/SortPanel";
import SearchInput from "../../components/goodsItem/controlPanels/searchInput/SearchInput";
import { useEffect, useState } from "react";


function GoodsList() {
    const dispatch = useDispatch()

    const goods = useSelector(state => state.goods)
    const filteredData = useSelector(state => state.filteredGoods)
    const [goodListWithFilter, setGoodListWithFilter] = useState(goods.filter(good => good.name.toLowerCase().includes(filteredData.toLowerCase())))

    useEffect(() => {
        setGoodListWithFilter(goods.filter(good => good.name.toLowerCase().includes(filteredData.toLowerCase())))
    }, [filteredData, goods])

    const getAllList = () => {
        setGoodListWithFilter(goods)
        dispatch({
            type: "GET_FULL_LIST",
        })
    }

    return <div className="goods-page">
        <div className="controls_wrapper">
            <SortPanel />
            <SearchInput />
        </div>
        {goodListWithFilter.length ? <div className="goods-wrapper">
            <div className="goods-header">
                <div className="goods-header__item">Фото</div>
                <div className="goods-header__item">Название</div>
                <div className="goods-header__item">Просмотры</div>
                <div className="goods-header__item">Начало ротации</div>
                <div className="goods-header__item">Конец ротации</div>
            </div>
            {goodListWithFilter.map(item => <GoodsItem {...item} key={item.name} />)}

        </div> : <div>
            <h1>
                Такого товара нет!
            </h1>
            <button onClick={() => getAllList()}>Перейти ко всему списку</button>
        </div>
        }
    </div>

}


export default GoodsList