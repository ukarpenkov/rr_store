import { useDispatch, useSelector } from "react-redux"
import GoodsItem from "../../components/goodsItem/GoodsItem";
import './index.scss'
import SortPanel from "../../components/goodsItem/controlPanels/sortPanel/SortPanel";
import SearchInput from "../../components/goodsItem/controlPanels/searchInput/SearchInput";




function GoodsList() {

    const goods = useSelector(state => state.goods)



    return <div className="goods-page">
        <div className="controls_wrapper">
            <SortPanel />
            <SearchInput />
        </div>
        <div className="goods-wrapper">
            <div className="goods-header">
                <div className="goods-header__item">Фото</div>
                <div className="goods-header__item">Название</div>
                <div className="goods-header__item">Просмотры</div>
                <div className="goods-header__item">Начало ротации</div>
                <div className="goods-header__item">Конец ротации</div>
            </div>
            {goods.map(item => <GoodsItem {...item} key={item.name} />)}

        </div>
    </div>

}


export default GoodsList